
import { useForm } from "react-hook-form";
import Accordion from "./Accordion";


const Faq = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)



    return (
        <div className="px-3 md:px-0">
            <div className=" bg-sky-50 rounded py-5 ">
                <div className="flex justify-between flex-col lg:flex-row items-center">
                    <div className="flex-1  md:px-24 ">
                        <h2 className="text-5xl text-center font-bold mb-5 uppercase font-serif">Contact</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-3 mb-6">
                                <input type="text" className=" w-full input input-bordered" {...register("name", { required: true })} placeholder="Enter your name" />
                                <input {...register('email', { required: true })} type="email" className=" w-full input input-bordered" placeholder="Enter Your Email" />
                            </div>
                            <input {...register('subject', { required: true })} type="text" className="input mb-5 input-bordered w-full" placeholder="Your subject" />
                            <textarea  {...register('textarea', { required: true })} className=" mb-5 textarea textarea-bordered w-full textarea-lg" name="" id="" placeholder="Your message"></textarea>
                            <input className="btn btn-outline duration-200 w-full border-sky-400" type="submit" />
                            {/* <Button></Button> */}
                        </form>
                    </div>
                    {/* faq */}
                    <div className="flex-1">
                        <h1 className="text-5xl text-center font-bold mb-5 uppercase font-serif">FAQ</h1>
                        <Accordion></Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;