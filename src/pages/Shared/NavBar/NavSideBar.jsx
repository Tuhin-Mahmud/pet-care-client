import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ShoppingBadge from "../../../components/ShoppingBadge";

const NavSideBar = () => {
    const { user, logOutUser } = useAuth()


    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (

        <div className="">
            <ul className="menu ">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/petListing'>Pet Listing</Link></li>
                <li><Link to='/donationCampaigns'>Donation Campaigns</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/inspiration'>Inspiration</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                {user ? <button className="btn" onClick={handleLogOut}>LogOut</button> :
                    <li><Link to='/login'>Login</Link></li>}
                <button className="btn mt-5">
                    <ShoppingBadge></ShoppingBadge>
                </button>
            </ul>
        </div>

    );
};

export default NavSideBar;