import React  from "react";
import './hotal.css'
const Hotals=()=>{

    return(
        <div  className="mx-5 p-4">
            <h1 className="text-center my-5 text-4xl text-blue-500">  Rest Room & Night Stay</h1>
            <br />
            <div className="flex gap-5">

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="hotal-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/46c75f114502877.Y3JvcCwyNDcyLDE5MzQsNzE2LDE4OQ.jpg" alt="Shoes" /></figure>
  <div className="card-body">
      <button className="btn btn-primary text-center">Book Now </button>
    </div>
  </div>

            <div className="card  card-compact w-96 bg-base-100 shadow-xl">
  <figure><img  className="hotal-img" src="https://i.pinimg.com/originals/48/17/17/481717c0fdbf423c6b9065b128aa7a0e.jpg" alt="Shoes" /></figure>
  <div className="card-body">
      <button className="btn btn-primary text-center">Book Now </button>
    </div>
  </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="hotal-img" src="https://i.pinimg.com/originals/c0/c9/99/c0c999c7237ca926a31a4a229ef39fca.jpg" alt="Shoes" /></figure>
  <div className="card-body">
      <button className="btn btn-primary text-center">Book Now </button>
    </div>
  </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="hotal-img" src="https://i.pinimg.com/736x/7f/a4/ea/7fa4eaa1ffaaa94cfa513428a9eb1ba1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
      <button className="btn btn-primary text-center">Book Now </button>
    </div>
  </div>

  </div>
    </div>
)
}

export default Hotals;