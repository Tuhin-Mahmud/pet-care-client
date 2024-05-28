import { MdPlusOne } from 'react-icons/md';
import offer from '../../../assets/images/home/banner3.jpg'
// import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';


const Offers = () => {
    return (
        <div>
            <div className="hero  bg-base-100 my-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 border h-full '>
                        <img src={offer} className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1 space-y-2'>
                        <MdPlusOne className='text-6xl text-sky-400 border border-b-2' />
                        <h1 className="text-3xl md:text-5xl font-bold font-mono">We Are Providing Pet Care Service For Years.</h1>
                        <p className="text-stone-400">  Pllentesque maximus augue orci, quis congue purus iaculisona ideno joku Maecenas eu lorem quisesdoi massal molestie jugnute vulputate in sitagajoi amet diam Cras eu odio sit amet.</p>
                        <div className='flex items-center justify-between '>
                            <h3 className='text-xl italic'>we think working process my <span className='text-sky-500'>increase</span> mindset </h3>
                            <button className="btn border px-4 py-4 border-sky-300 rounded-r-full rounded-l-full">Based on <span className='underline underline-offset-1'>20,921 reviews</span><br />
                                <IoStarSharp className=' text-sky-400' />
                                Trustpilot</button>
                        </div>
                        <p className="flex text-lg">  Pllentesque maximus augue orci, quis congue purus iaculisona ideno joku Maecenas eu lorem quisesdoi massal molestie jugnute vulputate in sitagajoi amet diam Cras eu odio sit amet.</p>
                        <div className=''>
                            <h2 className='text-2xl font '>MH Tuhin</h2>
                            <p className='text-lg text-sky-400'>Founder, Pet care Adoption</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;