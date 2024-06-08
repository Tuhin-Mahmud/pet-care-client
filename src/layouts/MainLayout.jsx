import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton";


const MainLayout = () => {

    return (
        <div>
            <NavBar />
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="">
                <BackToTopButton className='' />
            </div>

            <Footer />

        </div>
    );
};

export default MainLayout;