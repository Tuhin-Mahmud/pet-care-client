import useCart from "../../../../hooks/useCart";
import detailsImg from '../../../../assets/images/category/rabbit/rabbit4.jpg'
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()

    const totalPrice = cart.reduce((item, total) => item + total.price, 0)

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete  this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/carts/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>

            <div className=' mb-32'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={detailsImg} alt="" />
                <h2 className='-mt-36 ml-24 uppercase text-white text-5xl'> Cart</h2>
            </div>
            <div>

                <div className="flex  items-center justify-center">
                    {cart.length ? <h1 className=" text-3xl capitalize font-mono mb-10 underline underline-offset-4">Your all Cart here </h1> :
                        <h1 className="text-center text-3xl capitalize font-mono mb-10 underline underline-offset-4 text-sky-500">No Cart Added Now</h1>}

                </div>

                <div className="overflow-x-auto bg-slate-100 h-[700px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300 rounded">
                                <th>
                                    #
                                </th>
                                <th className="text-xl">Image</th>
                                <th className="text-xl">name</th>
                                <th className="text-xl">Price</th>
                                <th className="text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td className="text-lg font-mono">
                                        {item.name}
                                    </td>
                                    <td className="text-lg text-sky-500">{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl text-red-600 ">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </th>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {/* buy now */}
            <div className="  flex bg-slate-100">
                <div className=" flex-1 ">
                    <input type="text" className="py-3 px-4  rounded-l-md rounded-r-none border border-sky-300 outline-none  w-2/3" placeholder="Coupon code" />
                    <input type="submit" className="py-3 px-4 rounded-r-md rounded-l-none bg-sky-300 hover:bg-slate-200 duration-500" value="Apply coupon" />
                </div>
                <div className="flex items-center justify-between flex-1">
                    <h2 className="text-xl font-serif">Total Price: {totalPrice} </h2>
                    {cart.length ? <input type="submit" value="Buy Now" className="btn py-3 px-9 rounded-md hover:bg-slate-300  bg-sky-300 duration-500" /> :
                        <input disabled type="submit" value="Buy Now" className="btn py-3 px-9 rounded-md hover:bg-slate-300  bg-sky-300 duration-500" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;