/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const CategoryCard = ({ category }) => {
    const { name, image } = category || {};
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-5  hover:shadow-2xl border-b-2 border-sky-300 cursor-pointer  group ">
                <figure><img className=" w-full h-[250px] object-cover group-hover:scale-110 transition duration-500" src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions flex items-center justify-between">
                        <h2 className="card-title uppercase font-serif">{name}</h2>
                        <Link to={`/allPetsCategory/${name}`}>
                            <button className="text-xl btn  animate-pulse "><FaArrowRight className="text-sky-500" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;