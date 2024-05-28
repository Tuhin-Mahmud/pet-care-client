import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";


const AdoptionRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: adoptionRequest = [], isLoading } = useQuery({
        queryKey: ['adoptionRequest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/userAdoption?email=${user?.email}`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <CoverText heading={'User All adoption request'} subHeading={'adoption request here'}></CoverText>
            {/* table */}

            <div className="overflow-x-scroll">
                <table className="md:w-full shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF]  text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            adoptionRequest.map(request => <tr key={request._id} className="hover:bg-gray-50 border-b transition duration-300">
                                <td className="py-4 px-4 flex justify-start">
                                    {request.photo ? <img src={request.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" /> : 'please add the photo'}
                                </td>
                                <td className="py-4 px-6 border-b text-xl font-medium">{request.name}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{request.email}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    {request.number}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default AdoptionRequest;