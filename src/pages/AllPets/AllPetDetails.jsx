import { useLoaderData } from 'react-router-dom';
import details from '../../assets/images/category/cats/details.jpg'


import RidSiteOffer from '../PetListing/RidSiteOffer';
import PetLisModal from '../PetListing/PetLisModal';
const AllPetDetails = () => {
    const petDetails = useLoaderData()
    const { name, image, longDescription, shortDescription, age, date, country, category, color, vaccinationStatus, } = petDetails || {};

    return (
        <div className=''>
            <div className=' mb-20'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={details} alt="" />
                <h2 className='-mt-36 ml-24 uppercase text-white text-2xl md:text-5xl'> Pet Category Details </h2>

            </div>
            {/* details card */}
            <div className='grid md:grid-cols-5 my-32 gap-7 px-10 '>

                <div className='md:col-span-3 '>
                    <div className='border-s-4 border-s-sky-300 ps-2'>
                        <h2 className=' text-4xl text-sky-500 capitalize font-mono '>Details For {name} pet</h2>
                        <p>{longDescription}</p>
                    </div>
                    <div className='my-10'>
                        <img src={image} alt="" />
                        <div className='bg-slate-50  font-extralight px-5'>
                            <h2 className='text-4xl font-mono capitalize py-6'>{name} full information and see the next one</h2>
                            <div className='space-y-2'>
                                <p>{shortDescription}</p>
                                <p>{longDescription}</p>
                            </div>

                            <div className='divider divider-info'></div>
                            <div className='flex justify-around  mb-4 italic'>
                                <p className=''><span >Category</span>: {category}</p>
                                <p>Age:{age}</p>
                                <p>Country: {country}</p>
                            </div>
                            <div className='flex justify-around pb-4 italic'>
                                <p>vaccinationStatus: {vaccinationStatus}</p>
                                <p>color: {color}</p>
                                <p>Date: {date}</p>

                            </div>

                            <div className=' flex justify-center pb-4'>
                                <PetLisModal />
                            </div>

                        </div>
                    </div>
                </div>
                {/* ride side add */}
                <RidSiteOffer></RidSiteOffer>

            </div>


        </div>
    );
};

export default AllPetDetails;