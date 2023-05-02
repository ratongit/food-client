import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import CarouselFadeExample from "../Header/banner/Banner";
import './main.css'
const Main=()=>{

    return (
        <div>
            <h2>This is main page</h2>
        
        <Header></Header>
<div id="carousel">

<CarouselFadeExample></CarouselFadeExample>
</div>

        <Outlet></Outlet>


        </div>
    )

}

export default Main;