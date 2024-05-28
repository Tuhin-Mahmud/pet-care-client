import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";


const MainLayout = () => {

    return (
        <div>
            <NavBar />
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;