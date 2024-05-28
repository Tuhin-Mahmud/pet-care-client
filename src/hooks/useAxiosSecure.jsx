import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',

});
const useAxiosSecure = () => {
    const { logOutUser } = useAuth()
    const navigate = useNavigate()
    // add a request interceptors
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`


        return config;
    }, function (error) {

        return Promise.reject(error);
    })



    // add a response interceptors
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (err) => {
        // do something with response error
        // console.log('error in the interceptors with response', err.response.status);

        const status = err.response.status;
        if (status === 401 || status === 403) {
            // log out the user
            await logOutUser()
            navigate('/login')
        }


        return Promise.reject(err)
    })


    return axiosSecure;
};

export default useAxiosSecure;