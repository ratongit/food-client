import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
const UserProfile = () => {


    return (
        <div>
            <Header></Header>

            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Welcome 
      <br />
      <br /> to Your Profile !</h1>
      <p className="py-6">Hello and welcome! We're glad you're here. Whether you're a new user or a returning visitor, we hope you find what you're looking for and enjoy your experience on our website.</p>
      <a href="/">
      <button className="btn btn-primary">Get Started</button>
      </a>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    )

}

export default UserProfile;