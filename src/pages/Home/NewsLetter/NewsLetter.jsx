import { toast } from 'react-toastify';
import './news.css';
import { useState } from 'react';
const NewsLetter = () => {
    const [inputValue, setInputValue] = useState('')
    const [inputText, setInputText] = useState('')


    const handleConnect = e => {
        e.preventDefault()

        if (inputValue) {
            toast.success("You'r Connect Our news Letter, Thanks.")
            setInputValue('')
            setInputText('')
        }
        else {
            setInputText('please type your email.')

        }

    }
    return (
        <div className='px-5 md:px-3 lg:px-0'>
            <div className="bgNews my-10 overflow-x-auto ">

                <div className=" px-14 py-20 rounded-xl flex flex-col  ">
                    <div>
                        <h3 className="text-sky-500 text-3xl">Get in touch</h3>
                        <h2 className="text-3xl md:text-6xl font-mono font-bold my-5">{"Let's Connect Our NewsLetter"}</h2>
                    </div>

                    <div className=' '>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            name='email' className="w-3/4  md:w-2/3 pl-7  py-5 rounded " type="email" placeholder="Type Your Email" required />

                        <input onClick={handleConnect} className="border px-9 py-4  text-white uppercase rounded-xl -ml-20 bg-sky-300" type="submit" value="Connect" />
                    </div>
                    <p className=' font-mono text-stone-950 text-lg'>{inputText}</p>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;