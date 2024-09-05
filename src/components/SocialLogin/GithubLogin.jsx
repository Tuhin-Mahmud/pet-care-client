import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GithubLogin = () => {
    const { githubLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('user github login successfully')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="md:mx-auto ">
            <button
                onClick={handleGithubLogin}
                className="flex items-center border border-sky-200  text-xl font-serif px-3 py-2 rounded-md shadow-lg outline-base-300  "> <FaGithub className="mr-2 text-3xl" /> <span className="hidden md:block">Continue with</span> github</button>
        </div>
    );
};

export default GithubLogin;