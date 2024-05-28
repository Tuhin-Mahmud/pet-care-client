import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const PetCategory = () => {
    const axiosPublic = useAxiosPublic()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axiosPublic.get('/api/v1/pets-category')
            .then(res => {
                setCategories(res.data)
            })
    }, [axiosPublic])
    return (
        <div>
            <SectionTitle subHeading={'our pet care service'} Heading={'our popular pet category'} description={'Choose Your Pet: Decide which type of pet best fits your lifestyle, whether its a dog cat, bird, fish, reptile, or small mammal.'}></SectionTitle>
            {/* category data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>


    );
};

export default PetCategory;