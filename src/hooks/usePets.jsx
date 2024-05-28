import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePets = (search) => {
    const axiosPublic = useAxiosPublic()
    // console.log(search);
    const { data: pets = [], isLoading } = useQuery({
        queryKey: ['pets', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/allPets-read?search=${search}`)
            return res.data;
        }
    })

    return [pets, isLoading];
};

export default usePets;