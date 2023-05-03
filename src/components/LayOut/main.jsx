import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import CarouselFadeExample from "../Header/banner/Banner";
import './main.css'
import Chaf from "../chefDatais/Chef";
import LoginWithGoogle from "../Login/LoginWithGoogle";
const Main=()=>{

    return (
        <div>
            <h2>This is main page</h2>
        
        <Header></Header>
        <br />
        <LoginWithGoogle></LoginWithGoogle>
<div id="carousel">

<CarouselFadeExample></CarouselFadeExample>
</div>
<Chaf></Chaf>

        <Outlet></Outlet>


        </div>
    )

}

export default Main;