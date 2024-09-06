import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./shared/assets/style/main.scss";
import Home from "./pages/homePage/HomePage";
import Header from "./shared/components/Header";
import Banner from "./shared/components/Banner/Banner";
import Team from "./shared/components/Team/Team";
import Community from "./shared/components/Community/Community";

import Footer from "./shared/components/Footer";


const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
             <Banner/>
             <Home/>
             <Team/>
             <Community/>
            <Footer />
        </>
    );
};

export default App;
