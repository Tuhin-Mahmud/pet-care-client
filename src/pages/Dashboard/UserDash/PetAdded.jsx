import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CoverText from "../../../components/common/CoverText";


const PetAdded = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const imgbb_hosting_api_key = import.meta.env.VITE_IMAGE_API_KEY;
    const image_upload_api = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_api_key}`

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_upload_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })

        console.log(res.data);

        if (res.data.success) {
            const petItem = {
                name: data.name,
                email: user?.email,
                image: res.data.data.display_url,
                age: data.age,
                location: data.location,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                date: data.date,
                submitDate: new Date(),
                category: data.category

            }
            const petRes = await axiosSecure.post('/api/v1/pedAdded-create', petItem)
            console.log(petRes.data);
            if (petRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }


    }


    return (
        <div>
            <CoverText heading={'add a pet collection'} subHeading={'please add a pets'}></CoverText>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    {/* pet Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet Name</span>
                        </label>
                        <input type="text"
                            {...register('name', { required: true })}
                            placeholder="Type Pet name" className="input input-bordered bg-slate-100 " />
                        {/* error handle */}
                        {errors.name && <span className='text-red-500'>pet name is required</span>}
                    </div>
                    {/* pet Image*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet Image</span>
                        </label>
                        <input type="file"
                            {...register('image', { required: true })}
                            className="input input-bordered p-2 bg-slate-100 " />
                        {/* error handle */}
                        {errors.image && <span className='text-red-500'>pet image is required</span>}
                    </div>
                    {/* pet age*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet age</span>
                        </label>
                        <input type="number"
                            {...register('age', { required: true })}
                            placeholder="Type age" className="input input-bordered p-2 bg-slate-100" />
                        {/* error handle */}
                        {errors.age && <span className='text-red-500'>pet age is required</span>}
                    </div>
                    {/* pet Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet Category</span>
                        </label>
                        <select
                            defaultValue='default'
                            {...register('category', { required: true })}
                            placeholder="Select your category"
                            className="select border w-full form-control input input-bordered bg-slate-100">

                            <option disabled value="default">Select your category?</option>
                            <option>cat</option>
                            <option>dog</option>
                            <option>pigeon</option>
                            <option>rabbit</option>
                        </select>
                        {/* error handle */}
                        {errors.category && <span className='text-red-500'>pet category is required</span>}
                    </div>
                    {/* pet Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet Location</span>
                        </label>
                        <input type="text"
                            {...register('location', { required: true })}
                            placeholder="Type Pet Location" className="input input-bordered p-2 bg-slate-100" />
                        {/* error handle */}
                        {errors.location && <span className='text-red-500'>pet location is required</span>}
                    </div>
                    {/* pet short Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet short description</span>
                        </label>
                        <input type="text"
                            {...register('shortDescription', { required: true })}
                            placeholder="Type Pet Short description" className="input input-bordered p-2 bg-slate-100" />
                        {/* error handle */}
                        {errors.location && <span className='text-red-500'>pet short Description is required</span>}
                    </div>
                    {/* pet Long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet Long Description</span>
                        </label>
                        <textarea
                            {...register('longDescription', { required: true })}
                            className="textarea textarea-bordered bg-slate-100" placeholder="Long Description"></textarea>
                        {/* error handle */}
                        {errors.longDescription && <span className='text-red-500'>pet long Description required</span>}
                    </div>
                    {/* pet short Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Pet short description</span>
                        </label>
                        <input type="date"
                            {...register('date', { required: true })}
                            className="input input-bordered p-2 bg-slate-100" />
                        {/* error handle */}
                        {errors.location && <span className='text-red-500'>pet date is required</span>}
                    </div>
                </div>
                <input className="bg-sky-200 w-full py-3 px-2 rounded-lg mt-3 text-lg font-semibold hover:scale-95  duration-500 overflow-hidden uppercase" type="submit" value="Add A Pet" />
            </form>
        </div>
    );
};

export default PetAdded;