import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

const Blogs = () => {

    return (
        <div className="mx-5">
            <Header></Header>

            <h1 className="text-center text-5xl">Indian Local Food</h1>
            <div>




                <div className="card m-3 shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Biryani</h2>
                        <p> A flavorful and aromatic rice dish that is usually made with meat, but can also be vegetarian. It is a staple in many Indian households and has many regional variations.
                        </p>
                    </div>
                </div>

                <div className="card m-3  shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title"> Butter Chicken</h2>
                        <p> A rich and creamy chicken dish that is cooked in a tomato-based sauce with butter and cream. It is often served with naan bread or rice.

                        </p>
                    </div>
                </div>
                <div className="card m-3  shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Chole Bhature</h2>
                        <p>  A popular Punjabi dish made with spicy chickpeas (chole) and deep-fried bread (bhature). It is often served with pickled onions and a side of yogurt.

                        </p>
                    </div>
                </div>
                <div className="card m-3  shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Dosas</h2>
                        <p>  A South Indian staple made from fermented rice and lentil batter that is cooked on a griddle. It can be filled with a variety of savory ingredients, such as spiced potatoes or paneer.


                        </p>
                    </div>
                </div>
                <div className="card m-3   shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Biryani</h2>
                        <p> A flavorful and aromatic rice dish that is usually made with meat, but can also be vegetarian. It is a staple in many Indian households and has many regional variations.
                        </p>
                    </div>
                </div>



            </div>

            <Footer></Footer>
        </div>
    )

}

export default Blogs;