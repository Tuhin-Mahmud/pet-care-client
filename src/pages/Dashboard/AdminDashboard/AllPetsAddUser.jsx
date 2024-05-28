import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, } from "react-icons/fa6";
import Swal from "sweetalert2";
import CoverText from "../../../components/common/CoverText";

const AllPetsAddUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allPets = [], refetch } = useQuery({
        queryKey: ['allPets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/pedAdded-read')
            return res.data
        }
    })
    console.log(allPets);


    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to remove this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/api/v1/pedAdded-cancel/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `Your ${item.name} been deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div>
            <CoverText heading={'All Pets here'} subHeading={'pets'}></CoverText>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((item, indx) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {indx + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.location}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost "><FaTrash className="text-xl text-red-600" /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllPetsAddUser;