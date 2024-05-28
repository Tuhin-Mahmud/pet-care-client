import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GithubLogin = () => {
    const { user } = useAuth()
    return (
        <div className="md:mx-auto ">
            <button className="flex items-center border border-sky-200  text-xl font-serif px-3 py-2 rounded-md shadow-lg outline-base-300  "> <FaGithub className="mr-2 text-3xl" /> <span className="hidden md:block">Continue with</span> github</button>
        </div>
    );
};

export default GithubLogin;