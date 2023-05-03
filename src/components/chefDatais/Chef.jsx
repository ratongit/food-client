import React, { useEffect, useState } from "react";
import './chef.css'

const Chaf = () => {

  const [chefs, setChefs] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, [])

  return (
    
    <div className="chef-card pt-5 ">


      <div className="pt-5">



        <h1 className="text-5xl text-blue-400 mx-auto text-center">World Top Chef In One Frems</h1>
      </div >

      <div className="mt-5 text-center mx-5 flex gap-5" >



{
  chefs.map(chef=>




        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure><img src="https://m.media-amazon.com/images/I/811QmJcr+-L._SL1500_.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              MR : ROY KRISHNA
              <div className="badge badge-secondary">India</div>
            </h2>
            <p>Best Indian Deshi Food In Best Comination.</p>
            <div className="card-actions justify-end">
              <div className="badge w-50 h-10 mt-3 text-info badge-outline">Recipes</div>
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