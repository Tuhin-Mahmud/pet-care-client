/* eslint-disable react/prop-types */
import { CgNametag } from "react-icons/cg";
import { FaBirthdayCake, FaHouseDamage, FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";

const PetListingCatCart = ({ pet }) => {
    const { name, image, age, date, country, category, _id } = pet || {};

    return (

        <div className=" relative rounded-lg  h-[520px] bg-base-100 border border-stone-400 mt-5 drop-shadow-lg ">

            <figure>
                <img className="w-full h-[300px]  object-cover  rounded-t-lg  " src={image} />
            </figure>

            <div className="bg-white  mx-10 ">
                <h1 className="text-2xl  font-thin text-center text-black capitalize">{name}</h1>
                <div className="flex justify-between px-3 border-b-2 pb-2">
                    <p className="text-xl capitalize flex items-center space-x-2"><CgNametag className="mr-2" />{category}</p>
                    <p className="text-xl capitalize flex items-center " ><FaPlaneDeparture className="mr-2" />{country}</p>
                </div>

                <div className="flex justify-between pt-2 ">
                    <p className="text-xl capitalize flex items-center space-x-2"><FaHouseDamage className="mr-2" />Age:{age}</p>
                    <p className="text-xl capitalize flex items-center " ><FaBirthdayCake className="mr-2" />{date}</p>
                </div>

            </div>
            <div className="mt-[56px] text-center  ">
                <Link to={`/petDetails/${_id}`}>
                    <button className=" w-full py-4  font-serif rounded-b-lg  bg-stone-300 hover:bg-gray-400 hover:text-white duration-500">Details</button>
                </Link>
            </div>
        </div>

    );
};

export default PetListingCatCart;