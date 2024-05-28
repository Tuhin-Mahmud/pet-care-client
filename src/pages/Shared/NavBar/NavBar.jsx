import { Link } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import NavDropDown from "./NavDropDown";
import logo from '../../../assets/images/logo/logo2.png'
import NavItem from "./NavItem";


const NavBar = () => {


    return (

        <div className="navbar  fixed top-0 z-10 w-full bg-white bg-opacity-95 h-24 rounded border-b-[1px]  max-w-screen-xl mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavSideBar />
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link className="flex flex-col px-4 justify-center items-center text-stone-600 ">
                        <img className="w-8" src={logo} alt="" />
                        <h2 className="text-2xl font-serif"> Pet Care</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItem></NavItem>
                </ul>
            </div>
            <div className="navbar-end">
                <NavDropDown />
            </div>
        </div>
    );
};

export default NavBar;