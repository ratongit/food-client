import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import CarouselFadeExample from "../Header/banner/Banner";
import './main.css'
import Chaf from "../chefDatais/Chef";
import LoginWithGoogle from "../Login/LoginWithGoogle";
import Footer from "../footer/Footer";
import Hotals from "../Hotals/Hotals";
import Drink from "../drinks/drink";
const Main=()=>{

    return (
        <div>
        
        <Header></Header>
        <br />
        <LoginWithGoogle></LoginWithGoogle>
<div id="carousel" className="rounded">

<CarouselFadeExample></CarouselFadeExample>
</div>
<Chaf></Chaf>
<Drink></Drink>
<Hotals></Hotals>
<Footer></Footer>
        <Outlet></Outlet>


        </div>
    )

}

export default Main;