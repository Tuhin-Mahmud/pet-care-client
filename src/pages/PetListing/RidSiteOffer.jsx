
import { TiTickOutline } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';


const RidSiteOffer = () => {

    const handleBooking = () => {
        toast('Booking confirm, please wait.')
    }

    return (

        <div className=' py-10 md:col-span-2 border duration-1000 hover:bg-[#00224D] rounded-xl space-y-5 h-[600px] bg-[#FFEFEF] hover:text-white '>
            <div className='text-center'>
                <h3 className='text-sky-500 text-3xl font-mono'>Day care special</h3>
                <h2>$<span className='text-5xl font-serif'>99</span> <span className='text-lg text-sky-500'>Per Hour</span></h2>
            </div>
            <div className='divide-y  px-16 space-y-5 '>
                <p className='flex text-xl space-y-3  justify-between text-gray-400 capitalize'>Socialise Excercise <TiTickOutline className='text-sky-500 mb-4 font-thin' /></p>
                <p className='flex  justify-between text-xl text-gray-400 capitalize'>Handscissor Finish <TiTickOutline className='text-sky-500 mb-4 font-thin' /></p>
                <p className='flex justify-between text-xl text-gray-400 capitalize'>Watering Plants <TiTickOutline className='text-sky-500 mb-4 font-thin' /></p>
                <p className='flex justify-between text-xl text-gray-400 capitalize'>Conditioning Treatment <RxCross2 className='text-red-500 mb-4 font-thin' /></p>
                <p className='flex justify-between text-xl text-gray-400 capitalize'>Ears Flushed & Cleaned <RxCross2 className='text-red-500 font-thin mb-4' /></p>
                <p className='flex justify-between text-xl text-gray-400 capitalize'>Watering Plants <RxCross2
                    className='text-red-500 font-thin mb-4' /></p>
            </div>
            <button onClick={handleBooking} className='btn btn-outline border-sky-500  flex  mx-auto text-sky-500 hover:bg-white hover:text-black hover:italic uppercase'>Book Now</button>

        </div>

    );
};

export default RidSiteOffer;