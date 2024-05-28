import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";

const MyAddedPets = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: MyAddedPet = [], refetch, isLoading } = useQuery({
        queryKey: ['myAddedPets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/pedAdded-read?email=${user?.email}`)
            return res.data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }


    const handleAdopted = item => {
        axiosSecure.patch(`/pet-adopted/${item._id}`
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Adopted successfully')
                }
            })
        )

    }




    // delete  item
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
                axiosSecure.delete(`/api/v1/pedAdded-cancel/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `your pet has been deleted`,
                                icon: "success"
                            });
                        }
                    })



            }
        });



    }

    return (
        <div>
            {/* cover text */}
            <CoverText heading={'user all added pet here'} subHeading={'my add a pet'}></CoverText>
            {/* form in bottom */}
            <div>
                <div className="py-5 overflow-x-scroll">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr className="text-lg">
                                <th>
                                    #
                                </th>
                                <th>Pet image</th>
                                <th>Pet Name</th>
                                <th>Pet Category</th>
                                <th>Adoption Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MyAddedPet.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
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
                                    <td>{item.category}</td>

                                    <th>
                                        <button onClick={() => handleAdopted(item)} className="btn btn-ghost ">Not Adopted</button>
                                    </th>
                                    <th>
                                        <Link to={`/dashboard/myAddedPetUpdate/${item._id}`}>
                                            <button className="btn btn-ghost text-2xl"><FaEdit /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-500 text-xl"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedPets;