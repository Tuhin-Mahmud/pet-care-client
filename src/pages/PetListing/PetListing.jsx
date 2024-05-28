// import SearchField from "../../components/SearchField";
import petListingImg from '../../assets/images/category/cats/details.jpg'
import CoverImg from '../../components/common/CoverImg';
import CoverText from '../../components/common/CoverText';
import PetListingCategory from "./PetListingCategory";
import { useState } from "react";


const PetListing = () => {
    const [search, setSearch] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        const searchText = e.target.search.value;
        setSearch(searchText)

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
                            <input name="search" type="text" className="input input-bordered" placeholder='Please Type your pet' />
                            <input type="submit" value="Search"
                                className="py-3 px-3 rounded-lg bg-slate-400 border  text-white hover:bg-sky-400 duration-700 " />
                        </form>
                        {/* <SearchField setSearch={setSearch}></SearchField> */}
                    </div>

                </div>
                {/* all pets */}
                <div>
                    <PetListingCategory search={search}></PetListingCategory>
                </div>
            </div>
        </div>
    );
};

export default PetListing;