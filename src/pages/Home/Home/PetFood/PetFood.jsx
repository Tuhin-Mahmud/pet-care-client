import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PetFoodCart from "./PetFoodCart";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const PetFood = () => {
    const axiosPublic = useAxiosPublic()
    const [petFoods, setPetFoods] = useState([])
    useEffect(() => {
        // fetch('/food.json')
        //     .then(res => res.json())
        //     .then(data => setPetFoods(data))
        axiosPublic.get('/api/v1/petFood-read')
            .then(res => {
                setPetFoods(res.data)
            })
    }, [axiosPublic])
    return (
        <div>
            <SectionTitle subHeading={'Limit Offer'} Heading={'Best food for your loving Pet'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    petFoods.map(item => <PetFoodCart
                        key={item._id}
                        food={item}
                    ></PetFoodCart>)
                }
            </div>
        </div>
    );
};

export default PetFood;