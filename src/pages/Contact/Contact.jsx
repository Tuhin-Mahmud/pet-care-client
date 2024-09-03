import { IoLocationSharp } from 'react-icons/io5';
import contactImg from '../../assets/images/category/cats/details.jpg'
import { MdAddCall, MdOutgoingMail } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Map from './Map';
import CoverImg from '../../components/common/CoverImg';
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        reset()
        toast.success('please wait 2 days later for your message, thanks')
    }

    // ---------------------


    return (
        <div className=''>

            <CoverImg image={contactImg} text={'contact us page'}></CoverImg>
            {/* contact us */}
            <div className='flex flex-col md:flex-row my-10'>
                <div className='flex-1 w-full px-4 mb-8 md:mb-0'>
                    <div className=" min-h-full bg-gray-100 relative overflow-hidden  ">
                        <div className='w-1/2 mx-auto mt-32 space-y-10'>
                            <h1 className=" text-2xl   mt-5 text-center ">Hey!  Welcome to Contact Us</h1>
                            <p className='flex items-center'><IoLocationSharp className='text-sky-400 text-5xl mr-3' />W84 New Park Lan, Uttara, <br /> Dhaka Bangladesh</p>
                            <p className='flex items-center text-lg'><MdAddCall className='text-sky-400 text-5xl mr-3' />+00 153826494745</p>
                            <p className='flex items-center'><MdOutgoingMail className='text-sky-400 text-5xl mr-3' />petcare@gmail.com</p>
                        </div>
                        <span className="bg-sky-400 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
                        <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
                    </div>
                </div>


                {/* form */}
                <div className='flex-1 px-4 bg-gray-100 py-2'>
                    <div className='space-y-2 mb-5'>
                        <h3 className='text-2xl font-serif text-sky-400'>Contact Us</h3>
                        <h1 className='md:text-5xl text-4xl font-serif'>Let&apos;s Talk Question.</h1>
                        <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Your thoughts and inquiries are important, and we’re here to assist you in any way we can.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 form-control '>
                            <div> <input
                                {...register('name', { required: true })}
                                type="text" className='p-3 w-full outline-none drop-shadow-lg pl-10' placeholder='Name' />
                                {errors.name && <span className='text-red-500'>please fullfil the nam</span>}</div>
                            <div>
                                <input
                                    {...register('company', { required: true })}
                                    type="text" className='p-3 w-full outline-none drop-shadow-lg pl-10' placeholder='Company' />
                                {errors.company && <span className='text-red-500'>please type the company nam</span>}
                            </div>
                            <div>
                                <input
                                    {...register('email', { required: true })}
                                    type="Email" className='p-3 w-full outline-none drop-shadow-lg pl-10' placeholder='Email' />
                                {errors.email && <span className='text-red-500'>please type the email</span>}
                            </div>
                            <div>
                                <input
                                    {...register('phone', { required: true })}
                                    type="number" className='p-3 w-full outline-none drop-shadow-lg pl-10' placeholder='Phone' />
                                {errors.phone && <span className='text-red-500'>please type the phone number</span>}
                            </div>

                        </div>
                        <div className='mt-3 form-control space-y-4'>
                            <input
                                {...register('subject', { required: true })}
                                type="text" className='p-3 w-full outline-none drop-shadow-lg pl-10 block' placeholder='Subject' />
                            {errors.subject && <span className='text-red-500'>please type your subject</span>}
                            <textarea
                                {...register('message', { required: true })}
                                className="textarea  outline-none drop-shadow-lg w-full" placeholder="Message"></textarea>
                            {errors.message && <span className='text-red-500'>please type your message</span>}
                        </div>
                        <input type="submit" value="Sent Message" className='w-full drop-shadow-lg bg-gray-50 hover:bg-slate-300 py-2 mt-3 text-xl font-serif' />
                    </form>
                </div>
            </div>




            {/* google map */}
            <div className='my-28'>
                <Map></Map>

            </div>
        </div>
    );
};

export default Contact;