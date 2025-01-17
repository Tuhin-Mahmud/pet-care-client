import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ['user-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user-stats')
            return res.data;
        }
    })


    return (
        <div className="">
            <h1 className="flex text-3xl  md:text-5xl">
                <span>Hi! Well Come </span>,
                <p className="ml-3"> {user?.displayName ? user.displayName : 'Back'}</p>

            </h1>
            {/* --- */}
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5" >
                    {/* 1 */}
                    <div className="stats drop-shadow-lg  md:w-72 py-6  bg-gradient-to-r from-cyan-100 to-gray-300">

                        <div className="stat p">
                            <div className="stat-title text-xl mb-3">Total Pet Listing</div>
                            <div className="flex items-center">
                                <MdOutlinePets className=" mr-10 text-4xl text-sky-500" />
                                <div className="stat-value">{data?.petListing}</div>
                            </div>
                        </div>

                    </div>
                    {/* 2 */}
                    <div className="stats  drop-shadow-lg md:w-72 bg-gradient-to-r from-stone-200 to-pink-200 ">

                        <div className="stat">
                            <div className="stat-title">Total Food Page </div>
                            <div className="flex items-center">
                                <IoFastFoodOutline className=" mr-10 text-4xl text-sky-500" />
                                <div className="stat-value">{data?.petFood}</div>
                            </div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                    </div>
                    {/* 3 */}
                    <div className="stats drop-shadow-lg md:w-72 bg-gradient-to-r from-white to-stone-200">

                        <div className="stat">
                            <div className="stat-title">Total Add To Cart Views</div>
                            <div className="flex items-center">
                                <FaShoppingCart className=" mr-10 text-4xl text-sky-500" />
                                <div className="stat-value">{data?.addToCart}</div>
                            </div>
                            <div className="stat-desc">40% more than discount for you</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ---------- */}
            <div className="my-10 space-y-10">
                <div className="bg-gray-200 border h-24 rounded-md p-4">
                    <h4 className="text-3xl font-serif">All Donation</h4>
                    <p className="text-xl font-serif ">15</p>
                </div>
                <div className="bg-sky-200 border h-24 rounded-md p-4">
                    <h4 className="text-3xl font-serif">Our All Team Members</h4>
                    <p className="text-xl font-serif ">04</p>
                </div>
                <div className="bg-orange-100 border h-24 rounded-md p-4">
                    <h4 className="text-3xl font-serif">Our All user</h4>
                    <p className="text-xl font-serif ">{data?.user}</p>
                </div>
            </div>
            <h2 className="text-xl font-mono">Your everyday Plane</h2>
            <div className="bg-yellow-200 border h-32 md:h-24 rounded-md p-4">
                <h4 className="text-3xl font-serif">Pet Care everyDay</h4>
                <p className="text-xl font-serif ">We want to ensure the happiness for the pets.</p>
            </div>
        </div>
    );
};

export default UserHome;