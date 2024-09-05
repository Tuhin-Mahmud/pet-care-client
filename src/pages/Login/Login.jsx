
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login1.jpg'
import GithubLogin from '../../components/SocialLogin/GithubLogin';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const Login = () => {
    const { loginUser } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()



    const from = location.state?.from?.pathname || "/";
    // console.log(from);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // const toastId = toast.loading('logging user...')
        loginUser(data.email, data.password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                reset()
                navigate(from, { replace: true });
                toast.success('user loggedIn successFully')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })

    }


    return (
        <div className=''>
            <div className='flex  min-h-screen drop-shadow-lg bg-white '>
                <div className='flex-1 border  hidden md:block'>
                    <img className='w-full h-4/5 ' src={login} alt="" />
                </div>
                <div className='flex-1  w-full mx-auto lg:w-[500px] p-16  '>
                    <h1 className='text-3xl pb-8 font-serif '>Login To Pet Care</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className=''>
                            <label htmlFor="label" className='block  mb-2 mt-2'>
                                <span className='label-text text-lg font-serif'>Email</span>
                            </label>
                            <input {...register('email', { required: true })} type="email" placeholder=' your email please' className=' p-3 w-full border block pl-10 drop-shadow-lg outline-none ' />
                            {errors.email && <span className='text-red-500'>email is required</span>}
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="label" className='block mb-2 '>
                                <span className='label-text text-lg font-serif'>Password</span>
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 10,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Your Password'
                                    className='p-3 w-full pl-10 drop-shadow-lg block outline-none border' />
                                {/* ---password validation start--- */}
                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-500'>password must be at least 6 characters  long</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-500'>password must be at least 10 charecters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500'>password must at least one uppercase one lowerCase one number and one special characters</p>
                                )}
                                {/* --end-- */}
                                <span className='absolute right-4 top-5 text-xl' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className=''>
                            <input type="submit" value="Register" className=' duration-500 px-6 text-xl drop-shadow-xl rounded-lg py-3 outline-none bg-gray-200 hover:bg-sky-300 font-serif  ' />

                        </div>
                    </form>

                    <div className="divider">Login with social account</div>
                    <div className='flex justify-around '>
                        <GoogleLogin></GoogleLogin>
                        <GithubLogin></GithubLogin>
                    </div>
                    <p className='text-center mt-5 block text-lg font-serif shadow-inner '>Don&apos;t have an account? <Link to='/register' className='underline underline-offset-4  decoration-1 p-1 text-blue-500 text-lg '>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;