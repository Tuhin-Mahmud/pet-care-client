import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    photo: result.user.photoURL,
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        // navigate('/')
                        navigate(from, { replace: true });
                        toast.success('user loggedIn successfully..')

                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="md:mx-auto">
            <button onClick={handleGoogle} className="font-serif  flex items-center py-2 text-xl px-3  shadow-lg border rounded-md border-sky-200 outline-base-300  "><FcGoogle className="text-3xl mr-3 " /><span className="hidden md:block"> Continue with</span> google</button>
        </div>
    );
};

export default GoogleLogin;