import React, { useEffect, useState } from "react";
import './userProfile.css'
import Header from "./Header/Header";
import './userProfile.css'
import Footer from "./footer/Footer";

const Recipes=()=>{

  const [buttonDisabled, setButtonDisabled] = useState(false);

    
    function handleClick(event) {
      event.target.disabled = true;
    }


    const [chefs, setChefs] = useState([])
    useEffect(() => {
      fetch("https://chef-recipe-server-iaaj0fr3b-shuvomohanto129-gmailcom.vercel.app/chefs")
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
  
  


    return (
        <div>
            <Header></Header>
<h1 className="text-4xl text-center text-blue-500 mb-5">Welcome To Recipes Page</h1>


            {
  chefs.map(chef=> 

    
   

            <div className="Recipes-card  card card-compact  bg-base-100 shadow-xl">
  <figure><img src={
            chef.img
          }
           alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{
            chef.name
          }</h2>



          <div className="flex justify-between">
          {
              chef.Recipes.map(food=>


                <div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body">

    <div className="text-center">

    <h2 className="card-title ">{food.name
                    }</h2>

    </div>

    <p>{food.details
                    }</p>
  </div>
  <figure><img src={food.img
                    }alt="Shoes" /></figure>
                   
      <button className="btn btn-primary btn-disable bg-fuchsia-700" onClick={handleClick} disabled={buttonDisabled}>Like it</button>
  


                    </div>
                    
                )
          }
          </div>



  </div>
</div>


)}
<Footer></Footer>
        </div>
    )

}

export default Recipes;