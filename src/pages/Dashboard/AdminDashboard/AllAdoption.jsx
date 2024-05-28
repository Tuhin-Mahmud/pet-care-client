import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import CoverText from "../../../components/common/CoverText";

const AllAdoption = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allAdoption = [], refetch } = useQuery({
        queryKey: ['adoption'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/donation-campaign')
            return res.data;
        }
    })
    console.log(allAdoption);

    const handleDelete = item => {
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
                axiosSecure.delete(`/api/v1/donation-campaign/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deleteCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }

                    )

            }
        });
    }
    return (
        <div>
            <CoverText heading={'All added adoptions here '} subHeading={' adoptions'}></CoverText>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
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
                            allAdoption.map((item, indx) => <tr key={item._id}>
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

export default AllAdoption;