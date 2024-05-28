import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";

const MyDonationCampaigns = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: myDonationCap = [], refetch, isLoading } = useQuery({
        queryKey: ['myDonationCap', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/myDonation-Campaign?email=${user?.email}`)
            return res.data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't donation to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/myDonationCamp/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your donation has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }



    return (
        <div>
            <CoverText heading={'My donation campaign'} subHeading={'user Donate'}></CoverText>
            <div className="p-6 overflow-x-scroll">
                <table className="table w-full min-w-max text-left mt-4">
                    {/* head */}
                    <thead>
                        <tr className="text-xl cursor-pointer border-y-2 bg-blue-gray-50/50">
                            <th className="">#</th>
                            <th>Pet Name</th>
                            <th>Maximum Donation Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {
                            myDonationCap.map((donation, indx) => <tr key={donation._id}>
                                <th>{indx + 1}</th>
                                <td>{donation.name}</td>
                                <td>{donation.maximumAmount}</td>
                                <td>
                                    <button onClick={() => handleDelete(donation._id)} className="btn"><FaTrash className="text-red-500" /></button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonationCampaigns;