import { Link } from "react-router-dom";
import  { useContext } from "react";
import { AuthContex } from "../../Probiders/AuthProviders";
import logo from '../../assets/logo.jpg'
import  "./Header.css"

const Header=()=>{

  const {user,logOut}=useContext(AuthContex)


const HendleLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}

    return (
        <div>
        <div>

<div className="navbar justify-between text-white flex items-center  ">
  <div className=" flex items-center">
    <a className="flex items-center"><img id="img-logo" src={logo} alt="" /> <h4><b>Food World</b></h4></a>
  </div>
  <div className="">
    <ul className="menu menu-horizontal px-1" id="ul">
      <li ><a href="/">Home</a></li>


      <li ><Link to='/orders'>Order</Link></li>


     {user && <li ><Link to='/profile'>Profile</Link></li>}
     {user && <li  onClick={HendleLogOut}><button className="">Log Out</button></li>}




  {!user &&


  <li><a id="loginBtn" href="/login">Login</a>
 </li>



  }
  {!user &&
<li><a id="register" href="/register">Register</a></li>
  }


    </ul>
  </div>
</div>




        </div >

      
        </div>
    )

}

export default Header;