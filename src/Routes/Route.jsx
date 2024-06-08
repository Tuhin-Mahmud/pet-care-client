import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Shared/ErrorPage";
import Home from "../pages/Home/Home/Home";
import PetListing from "../pages/PetListing/PetListing";
import PetLisDetails from "../pages/PetListing/PetLisDetails";
import DonationCampaign from "../pages/DonationCampaign/DonationCampaign";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PetFoodDetails from "../pages/Home/Home/PetFood/PetFoodDetails";
import Cart from "../pages/Home/Home/PetFood/Cart";
import PrivetRout from "./PrivetRout";
import AllPets from "../pages/AllPets/AllPets";
import AllPetDetails from "../pages/AllPets/AllPetDetails";
import CampaignsDetails from "../pages/DonationCampaign/CampaignsDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import PetAdded from "../pages/Dashboard/UserDash/PetAdded";
import MyAddedPets from "../pages/Dashboard/UserDash/MyAddedPets";
import MyAddedUpdate from "../pages/Dashboard/UserDash/MyAddedPetUpdate";
import CreateDonationCampaign from "../pages/Dashboard/UserDash/CreateDonationCampaign";
import MyDonationCampaigns from "../pages/Dashboard/UserDash/MyDonationCampaigns";
import AdoptionRequest from "../pages/Dashboard/UserDash/AdoptionRequest";
import UserHome from "../pages/Dashboard/UserDash/UserHome";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import AllPetsAddUser from "../pages/Dashboard/AdminDashboard/AllPetsAddUser";
import AllAdoption from "../pages/Dashboard/AdminDashboard/AllAdoption";
import Gallery from "../pages/Gallery/Gallery";
import Inspiration from "../pages/Inspiration/Inspiration";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AdminRout from "./AdminRout";
import MyDonations from "../pages/Dashboard/UserDash/MyDonations";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // pet category related route
            {
                path: '/allPetsCategory/:category',
                element: <AllPets></AllPets>
            },
            {
                path: '/allPetsDetails/:id',
                element: <AllPetDetails></AllPetDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allPet-read/${params.id}`)
            },
            {
                path: '/petListing',
                element: <PetListing></PetListing>

            },
            {
                path: '/petDetails/:id',
                element: <PetLisDetails></PetLisDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allPet-read/${params.id}`)

            },
            {
                path: '/donationCampaigns',
                element: <DonationCampaign></DonationCampaign>,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/inspiration',
                element: <Inspiration />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/campaignsDetails/:id',
                element: <PrivetRout><CampaignsDetails /></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/campaigns-read/${params.id}`)
            },

            // pet food related routs
            {
                path: '/petFood/:id',
                element: <PetFoodDetails></PetFoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/petFood-read/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivetRout><Cart></Cart></PrivetRout>,

            },
        ]
    },

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

    // dashboard route
    {
        path: 'dashboard',
        element: <PrivetRout><DashboardLayout /></PrivetRout>,
        children: [
            // user only routes
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'addAPet',
                element: <PrivetRout><PetAdded /></PrivetRout>
            },
            {
                path: 'myAddedPets',
                element: <PrivetRout><MyAddedPets /></PrivetRout>
            },
            {
                path: 'myAddedPetUpdate/:id',
                element: <PrivetRout><MyAddedUpdate /></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/pedAdded-read/${params.id}`)
            },
            {
                path: 'createDonationCampaign',
                element: <PrivetRout><CreateDonationCampaign /></PrivetRout>
            },
            {
                path: 'myDonationCampaign',
                element: <PrivetRout><MyDonationCampaigns /></PrivetRout>
            },
            {
                path: 'adoptionRequest',
                element: <PrivetRout><AdoptionRequest /></PrivetRout>
            },
            {
                path: 'adoptionPaymentHistory',
                element: <PrivetRout><MyDonations /></PrivetRout>
            },
            // admin only routes
            {
                path: 'adminHome',
                element: <AdminRout><AdminHome /></AdminRout>
            },
            {
                path: 'allUsers',
                element: <AdminRout><AllUsers /></AdminRout>
            },
            {
                path: 'allPetUser',
                element: <AdminRout><AllPetsAddUser /></AdminRout>
            },
            {
                path: 'allAdoption',
                element: <AdminRout><AllAdoption /></AdminRout>
            },
        ]
    }



])

export default router;