/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const PetFoodCart = ({ food }) => {
    const { name, image, price, _id } = food || {};


    const handleWishList = () => {

        toast('WishList added successfully thanks.')
    }


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl  hover:border border-sky-400">
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="Shoes" className="rounded-xl bg-stone-200 p-4 h-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize  ">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="w-full flex italic justify-between">
                        <Link to={`/petFood/${_id}`}>
                            <div className="border px-2 py-2 rounded-lg bg-gray-100 text-lg font-mono hover:bg-sky-300 hover:text-white duration-700 ">Details</div>
                        </Link>
                        <div onClick={handleWishList} className="border px-2 italic py-2 rounded-lg bg-gray-100 text-lg font-mono hover:bg-sky-300 duration-700 hover:text-white">WishList</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetFoodCart;