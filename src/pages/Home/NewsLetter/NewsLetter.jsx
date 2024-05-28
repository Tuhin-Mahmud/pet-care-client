// import { useState } from 'react';
import { toast } from 'react-toastify';
import './news.css';
const NewsLetter = () => {
    // const [email, setEmail] = useState('')

    const handleConnect = () => {
        toast.success("You'r Connect Our news Letter, Thanks.")

    }
    return (
        <div className="bgNews my-10 overflow-x-auto ">

            <div className=" px-14 py-20 rounded-xl flex flex-col  ">
                <div>
                    <h3 className="text-sky-500 text-3xl">Get in touch</h3>
                    <h2 className="text-3xl md:text-6xl font-mono font-bold my-5">{"Let's Connect Our NewsLetter"}</h2>
                </div>

                <div className=' '>
                    <input name='email' className="w-3/4  md:w-2/3 pl-7  py-5 rounded " type="email" placeholder="Type Your Email" />

                    <input onClick={handleConnect} title='thanks ' className="border px-9 py-4  text-white uppercase rounded-xl -ml-20 bg-sky-300" type="button" value="Connect" />
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;