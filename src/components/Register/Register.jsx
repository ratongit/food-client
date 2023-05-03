import { Link } from "react-router-dom";
import  { useContext, useState } from "react";
import { AuthContex } from "../../Probiders/AuthProviders";
import Header from "../Header/Header";
import "./Register.css"
import LoginWithGoogle from "../Login/LoginWithGoogle";

 
// const auth = getAuth(app)

const Register=()=>{

 const  {user,createUser} =useContext(AuthContex) ; 
 
 
console.log( createUser);




const HendleRegister = (event) => {
    event.preventDefault()
   const form=event.target
    const email = form.email.value
    const password = form.password.value
    const fristName = form.name.value
    console.log(email, password,fristName)


    //new code start//
    createUser(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset()
      })    
      .catch(error => {
        console.log(error)
      })    
      //new code end//
      
      
      
      //     // creact usar in fb// old code//
      // createUserWithEmailAndPassword(auth, email, password)
      // .then(result => {
      //   const loggedUser = result.user;
      //   console.log(loggedUser)
      //   })    
      //   .catch(error => {
      //       console.log(error)
      //   })    

}        


    return (
      <div className="Registion-div" >
      <Header></Header>
      <div className="float-right">
      <LoginWithGoogle></LoginWithGoogle>
      </div>
<div className="  hero-top">
  <div className="hero-content block">
      <h1 className="text-5xl font-bold text-dark block mb-8 text-white">Register</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 block">
      <  form onSubmit={HendleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white ">First Name</span>
          </label>
          <input type="text" className="text-white" name="name" id="name" placeholder="Your  Name" required></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="eamil" className="text-white" id="email" placeholder="Your Email" required></input>
        </div>
        <div className="form-control">
          <label className="label text-white">
            <span className="label-text text-white">Password</span>
          </label>
          <input  type="password" className="text-white" name="passwoed" id="password" placeholder="Your password" required ></input>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"><input type="submit" value='Register'></input></button>
        </div>
      </form>

<Link to='/login'>  
   <button className="btn btn-active btn-link text-white">Go to login page ?</button>  
</Link> 
        </div>
  </div>
</div>

        </div>
    )

}

export default Register;



