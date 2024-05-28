/* eslint-disable react/prop-types */
import Loading from "../../components/Loader/Loading";
import usePets from "../../hooks/usePets";
import PetListingCatCart from "./PetListingCatCart";

const PetListingCategory = ({ search }) => {

    const [pets, isLoading] = usePets(search)


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                pets.map(pet => <PetListingCatCart
                    key={pet._id}
                    pet={pet}
                ></PetListingCatCart>)
            }
        </div>
    );
};

export default PetListingCategory;