import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePets = () => {
    const axiosPublic = useAxiosPublic()
    // console.log(search);
    const { data: pets = [], isLoading } = useQuery({
        queryKey: ['pets',],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/allPets-read')
            return res.data;
        }
    })

    return [pets, isLoading];
};

export default usePets;