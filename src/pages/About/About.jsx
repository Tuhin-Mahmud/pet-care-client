import { FaCat } from 'react-icons/fa';
import about from '../../assets/images/gallery/gallery.jpg'
import aboutImg from '../../assets/images/category/cats/cat3.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaDog } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';
import TeamMember from './TeamMember';
import CoverImg from '../../components/common/CoverImg';

const About = () => {
    return (
        <div>

            <CoverImg image={aboutImg} text={'about Page'}></CoverImg>
            {/* our team member */}
            <div>
                <SectionTitle subHeading='Because We Really Care Welcome Your Pets' Heading="Welcome to Petenica"></SectionTitle>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 px-5'>
                    <img className='rounded-xl' src={about} alt="" />
                </div>
                <div className='flex-1 space-y-4 px-5 '>
                    <h3 className='text-xl font-bold text-sky-500'>About us</h3>
                    <h1 className='text-5xl font-serif'>Your pet deserver the best service</h1>

                    <p className='text-slate-500'>Broadcast neglectful and poignantly well until and some listlessly amidst suc cessful concentrically ably dachshund more far but forwardly echidna outside tiger split thanks far vibrantly gosh hence pangolin however notwithstanding leapt untruthful gauchely yikes komodo dully more.</p>
                    <p className='text-slate-500'>As abandoned winced this more far wow jeepers near more wow goodness so revealed much along worm some grasshopper.</p>
                    <button className="btn btn-outline btn-info">View More Service</button>
                </div>
            </div>
            {/* care card */}
            <div className='my-10 md:flex gap-5 px-5'>
                <div className='flex items-center  py-12 md:w-1/3 justify-center bg-white drop-shadow-xl border rounded-md'>
                    <FaCat className='text-5xl mr-5 text-stone-500/65' />
                    <div>
                        <h2 className='text-4xl font-serif capitalize'>We Care Pets</h2>
                        <p className='text-lg capitalize'>Pet Sheltering & Adoption</p>

                    </div>
                </div>
                <div className='flex items-center  py-12 md:w-1/3 justify-center bg-white drop-shadow-xl border my-5 md:my-0 rounded-md'>
                    <FaDog className='text-5xl mr-5 text-stone-800/65' />
                    <div>
                        <h2 className='text-4xl font-serif capitalize'>We Heal Pets</h2>
                        <p className='text-lg capitalize'>Quick Veterinary Services</p>

                    </div>
                </div>
                <div className='flex items-center  py-12 md:w-1/3 justify-center bg-white drop-shadow-xl border rounded-md'>
                    <MdOutlinePets className='text-5xl mr-5 text-stone-500/65' />
                    <div>
                        <h2 className='text-4xl font-serif capitalize'>We Love Pets</h2>
                        <p className='text-lg capitalize'>Show love donate us</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="  mt-16 px-5 ">
                    <h2 className="border-s-4 text-4xl font-serif border-sky-400 ps-2 ">Our Team Members</h2>
                    <h1 className="border-s-4 text-xl border-sky-300 ps-2">Because We Really Care About Your Pets </h1>
                </div>
                <TeamMember></TeamMember>
            </div>
        </div>
    );
};

export default About;