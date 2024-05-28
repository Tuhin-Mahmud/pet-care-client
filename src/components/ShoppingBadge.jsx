import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";


const ShoppingBadge = () => {
    const [cart] = useCart()
    return (
        <div>
            <Link to='/cart'>
                <div className="relative mx-auto bg-white hover:bg-gray-200 p-2 rounded-md w-fit h-fit  ">
                    <FaShoppingCart className="text-xl"></FaShoppingCart>
                    <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">{cart.length}</span>
                </div>
            </Link>
        </div>
    );
};

export default ShoppingBadge;