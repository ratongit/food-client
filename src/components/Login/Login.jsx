// import React from "react";

import React, { useState } from "react";
import { useContext } from "react";
import { AuthContex } from "../../Probiders/AuthProviders";
import Header from "../Header/Header";
import './login.css'
import Footer from "../footer/Footer";



const Login=()=>{

  
  const {signIn}=useContext(AuthContex)
const [email, setEmail] = useState('')    



const HendleSubmit = (event) => {
    event.preventDefault()
    const form=event.target
    const email = form.email.value
    const password = form.password.value

    signIn(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
  })    
  .catch(error => {
      console.log(error)
  })    




}        


    return (
        <div className="background" >    


<Header></Header>

        <div className="login-card d-inline mt-0" >    
<div className="hero min-h-screen mt-0 ">
  <div className="hero-content block">
      <h1 className="text-5xl text-white font-bold block mb-10 top-logIn">Log in</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 block">
      <  form onSubmit={HendleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" className="text-white"  name="eamil" id="email" placeholder="Your Email" required></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input  type="password" className="text-white" name="passwoed" id="password" placeholder="Your password" required ></input>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"><input type="submit" value='Login Now'></input></button>
        </div>
      </form>

<a href='/register'>  
   <button className="btn btn-active btn-link text-white">New user to Food World?</button>  
</a> 
        </div>
  </div>
</div>

        </div>
        <Footer></Footer>
        </div>
    )

}

export default Login;

