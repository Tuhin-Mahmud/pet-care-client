/* eslint-disable react/prop-types */

import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const TeamCart = ({ member }) => {
    return (
        <div className="h-[450px] border rounded shadow-xl hover:border-sky-300">
            <div className="">
                <img className="h-[300px] w-full object-cover rounded" src={member.image} alt="" />
                <div className="mt-5">
                    <h1 className="text-xl text-center font-serif">{member.name}</h1>
                    <h3 className="capitalize  font-sans text-center">{member.title}</h3>
                </div>
                <div className="flex items-center justify-center mt-5 space-x-5 text-2xl">
                    <a href=""><FaFacebook className="hover:text-sky-400 duration-500 text-blue-500" /></a>
                    <a href=""><FaInstagramSquare className="duration-500 text-sky-400  " /></a>
                    <a href=""><FaTwitter className="text-sky-400 duration-500 " /></a>


                </div>
            </div>
        </div>
    );
};

export default TeamCart;