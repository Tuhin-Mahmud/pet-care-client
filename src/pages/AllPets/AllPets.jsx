import usePets from "../../hooks/usePets";
import allPetsImg from '../../assets/images/category/cats/details.jpg'
import { useParams } from "react-router-dom";
import AllPetCart from "./AllPetCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllPets = () => {
    const [pets] = usePets()
    console.log(pets);
    const { category: petCategory } = useParams()
    // console.log(pets);

    const allPetCategory = pets.filter(item => item.category === petCategory)
    // console.log(allPetCategory);

    return (
        <div>
            <div className=' mb-32'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={allPetsImg} alt="" />
                <h2 className='-mt-36 ml-24 uppercase text-white text-5xl'> All Pets  </h2>
            </div>

            {/*all pets */}
            <SectionTitle subHeading="your Favourite pets" Heading={`your pets list`}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    allPetCategory.map(item => <AllPetCart
                        key={item._id}
                        item={item}
                    ></AllPetCart>)
                }
            </div>

        </div>
    );
};

export default AllPets;