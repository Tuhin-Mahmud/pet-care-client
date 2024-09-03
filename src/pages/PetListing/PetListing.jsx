// import SearchField from "../../components/SearchField";
import { useQuery } from '@tanstack/react-query';
import petListingImg from '../../assets/images/category/cats/details.jpg'
import Loading from '../../components/Loader/Loading';
import CoverImg from '../../components/common/CoverImg';
import CoverText from '../../components/common/CoverText';

import PetListingCatCart from './PetListingCatCart';
import { useState } from "react";
import useAxiosPublic from '../../hooks/useAxiosPublic';


const PetListing = () => {
    const [search, setSearch] = useState('')
    const axiosPublic = useAxiosPublic()
    console.log(typeof search);
    // const [pets, isLoading] = usePets(search)
    const { data: pets = [], isLoading } = useQuery({
        queryKey: ['petListing', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/allPets-read?search=${search}`)
            console.log(res.data)
            return res.data;
        }

    })

    const handleSubmit = e => {
        e.preventDefault()
        const searchText = e.target.search.value;
        setSearch(searchText)

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="">

            <CoverImg image={petListingImg} text={'Pet Listing'}></CoverImg>

            {/* search field */}
            <div className="px-5 my-10">
                <div className="flex  justify-between items-center">
                    <CoverText heading={'All pet listing here'} subHeading={'Listing pet'}></CoverText>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input name="search" type="text" className="input input-bordered mb-2 md:mb-0" placeholder='Please Type your pet' />
                            <input type="submit" value="Search"
                                className="py-3 px-3 rounded-lg bg-slate-400 border  text-white hover:bg-sky-400 duration-700 " />
                        </form>
                        {/* <SearchField setSearch={setSearch}></SearchField> */}
                    </div>

                </div>
                {/* all pets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        pets?.map(pet => <PetListingCatCart
                            key={pet._id}
                            pet={pet}
                        ></PetListingCatCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PetListing;