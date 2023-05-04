import React, { useEffect, useState } from "react";
import './userProfile.css'
import Header from "./Header/Header";
import './userProfile.css'
import Footer from "./footer/Footer";

const Recipes=()=>{



    const [chefs, setChefs] = useState([])
    useEffect(() => {
      fetch("http://localhost:5000/chefs")
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

    
   

            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={
            chef.img
          }
           alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{
            chef.name
          }</h2>
          <h2>
          {
              chef.Recipes.map(food=>
                <h1><p>Recipe name :
                    <br />
                    </p>{food.name
                    }
                    <br />
                    <br />
                    <p>Recipes details: </p>
                    {food.details
                    }
                    <br />
                    <br />
                    
                    
                    </h1>
                    
                )
          }
          </h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" >Like it</button>
    </div>
  </div>
</div>


)}
<Footer></Footer>
        </div>
    )

}

export default Recipes;