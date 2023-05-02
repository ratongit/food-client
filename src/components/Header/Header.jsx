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


  <li><a id="loginBtn" href="#"><div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} >Login</label>
  <ul tabIndex={0} className="dropdown-content py-2  menu mt-5 border-white border-e-4 border-s-4 rounded-box w-52">

    <li><a href="/login">LogIn With Email</a>

     <br /><hr className='text-white w-100 mx-2 bg-inherit hr'  /></li>

    <li><a>LogIn with Google</a> 

    <hr className='text-white w-100 mx-2 hr' /></li>

    <li><a>LogIn with GitHab</a></li>

  </ul>
</div>
</a></li>



  }
  {!user &&
<li><a id="register" href="/register">Register</a></li>
  }


      {/* <li><a id="loginBtn" href="/login">Login</a></li>
      <li><a id="register" href="/register">Register</a></li> */}
    </ul>
  </div>
</div>



{/* {
  user  &&
  <><span>{user.email}</span> <button onClick={HendleLogOut} className="btn" id="signout"> sing  out</button> 

</> 
}
 */}


        </div >

      
        </div>
    )

}

export default Header;