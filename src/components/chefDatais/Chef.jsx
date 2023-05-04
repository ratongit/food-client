import React, { useEffect, useState } from "react";
import './chef.css'

const Chaf = () => {

  const [chefs, setChefs] = useState([])
  useEffect(() => {
    fetch("https://chef-recipe-server-iaaj0fr3b-shuvomohanto129-gmailcom.vercel.app/chefs")
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])


  const hendleChefDetails=()=>{

    
  }


  return (
    
    <div className="chef-card pt-5 ">


      <div className="pt-5">



        <h1 className="text-5xl text-blue-400 mx-auto text-center">World Top Chef In One Frems</h1>
      </div >

      <div className="mt-5 text-center mx-5 flex gap-5" >



 {
  chefs.map(chef=> 




        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure><img className="img" src=   {
            chef.img
          }
           alt="Shoes" /></figure>

       
          <div className="card-body">
            <h2 className="card-title">
            {
            chef.name
          }
              <div className="badge badge-secondary"> {
            chef.country
          }</div>
            </h2>
            <p>  {
            chef.details
          }</p>
            <div className="card-actions justify-between flex">
              <div>
              <a className="badge  h-10 mt-3 text-info badge-outline"> {
            chef.Experience
          } years Experience</a>
              </div>
              <div>
              <a href="/recipes" 

              onClick={hendleChefDetails} 

              className="badge  h-10 mt-3 text-info badge-outline"> Viws Recipes </a>
              </div>
            </div>
          </div>
        </div>






)
} 


      </div>
    </div>


  )

}

export default Chaf;