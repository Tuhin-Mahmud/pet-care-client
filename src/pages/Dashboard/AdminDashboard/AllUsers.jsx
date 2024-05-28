import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import CoverText from "../../../components/common/CoverText";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    // const { user } = useAuth()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakAdmin = async (id) => {
        const res = await axiosSecure.patch(`/user/makAdmin/${id}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            refetch()
            toast.success('user admin successfully done')
        }

    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users-cancel/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }




    return (
        <div>

            <CoverText heading={'all user here'} subHeading={'users'}></CoverText>



            <div className="overflow-x-auto">
                <table className="min-w-[90%] md:min-w-full shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">User Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">User Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Role</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(item => <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                                <td className="py-4 px-4 flex justify-start">
                                    <img src={item.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                </td>
                                <td className="py-4 px-6 border-b text-xl font-medium">{item.name}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{item.email}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    {item.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakAdmin(item._id)}
                                        className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4   rounded-md"><FaUser /></button>}
                                </td>
                                <td className="py-4 px-6 border-b text-end">
                                    <button onClick={() => handleDelete(item._id)} className="btn"><FaTrashAlt className="text-xl text-red-500" /></button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>



        </div>


    );
};

export default AllUsers;