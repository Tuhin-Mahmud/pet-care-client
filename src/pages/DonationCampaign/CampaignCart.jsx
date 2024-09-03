/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CampaignCart = ({ item }) => {
    const { _id, name, image, age, maximumDonation, donated, } = item || {};
    return (
        <div className="">
            <div className="h-[500px] bg-base-100 shadow-xl rounded-lg ">
                <div className="p-3 relative ">
                    <figure><img className="h-[300px] rounded-lg object-cover" src={image} alt="Shoes" /></figure>
                    <p className="absolute top-5 px-3 text-white rounded bg-stone-700 right-5">age: {age}</p>
                </div>
                <div className="px-5 ">
                    <h2 className="text-xl text-center font-serif capitalize">{name}</h2>
                    <div className="flex justify-between mt-5">
                        <p className="text-lg">Maximum Donation: <span className="font-serif">${maximumDonation}</span></p>
                        <p className="text-lg"> Donated: <span className="font-serif">${donated}</span></p>
                    </div>
                    <div className="text-center mt-10 w-auto">
                        <Link to={`/campaignsDetails/${_id}`}>
                            <div className="border py-2 w-1/2 mx-auto active:scale-x-125 rounded-lg bg-sky-200 text-lg font-mono hover:bg-slate-300 duration-500">Details</div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CampaignCart;