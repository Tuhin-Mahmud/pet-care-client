import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import NewsLetter from "../NewsLetter/NewsLetter";
import Offers from "../Offers/Offers";
import PetCategory from "../PetCategory/PetCategory";
import Testimonials from "../Testimonials/Testimonials";
import PetFood from "./PetFood/PetFood";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pet Car | Home</title>
            </Helmet>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <Offers></Offers>
            <PetFood></PetFood>
            <NewsLetter></NewsLetter>
            <Faq></Faq>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;