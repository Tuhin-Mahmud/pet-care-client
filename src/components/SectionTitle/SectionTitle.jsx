/* eslint-disable react/prop-types */
import logo from '../../assets/images/logo/logo2.png'
const SectionTitle = ({ subHeading, Heading, description }) => {
    return (
        <div className=' w-1/2 mx-auto text-center my-10 space-y-2'>
            <img className='w-[60px] mx-auto' src={logo} alt="" />
            <h4 className=" md:text-2xl font-mono text-sky-600">{subHeading}</h4>
            <h2 className="text-xl md:text-4xl font-serif capitalize text-gray-600 font-semibold">{Heading}</h2>
            <p className="text-slate-500 hidden md:block">{description}</p>
        </div>
    );
};

export default SectionTitle;