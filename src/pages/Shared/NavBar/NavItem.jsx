import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ShoppingBadge from "../../../components/ShoppingBadge";

const NavItem = () => {
    const { user, logOutUser } = useAuth()

    const handleLogout = () => {
        logOutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="flex text-xl ml-20  gap-5">

                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                } >Home</NavLink>
                <NavLink to='/petListing'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >Pet Listing</NavLink>
                <NavLink to='/donationCampaigns'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >Donation Campaigns</NavLink>
                <NavLink to='/gallery'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >Gallery</NavLink>
                <NavLink to='/inspiration'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >Inspiration</NavLink>
                <NavLink to='/about'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >About Us</NavLink>
                <NavLink to='/contact'
                    className={({ isActive }) =>
                        isActive ? "text-sky-500 underline underline-offset-4 decoration-1 ps-2 font-serif" : "text-stone-800 "
                    }
                >Contact</NavLink>
                {
                    user ? <div onClick={handleLogout} className="hover:text-sky-500 cursor-pointer">LogOut</div>
                        :
                        <NavLink to='/login' >Login</NavLink>
                }


                <button>
                    <ShoppingBadge></ShoppingBadge>
                </button>
            </div>
        </div>
    );
};

export default NavItem;