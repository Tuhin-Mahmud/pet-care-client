import { Link } from 'react-router-dom';
import error from '../../assets/images/login/error1.jpg'
const ErrorPage = () => {
    return (
        <div>
            <img className='w-1/3 h-1/3 mx-auto' src={error} alt="" />
            <Link to='/' className='btn flex border border-sky-400 text-xl text-stone-800 font-serif mx-auto w-1/4'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;