import chef1 from '../../../assets/chef1.jpg'
// import food from '../../../assets/food.jpg'
import food2 from '../../../assets/food2.jpg'
import food3 from '../../../assets/food3.webp'
import "./Banner.css"
// const Banner = () => {
//     return (
//         <div className="carousel w-100">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img src={food3} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide4" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img src={ chef1} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img src={food2 } className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide4" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide4" className="carousel-item relative w-full">
//                 <img src={ food} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Banner;



import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img id="img-hight"
          className="d-block w-100 "
          src={chef1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="img-hight"
          className="d-block w-100"
          src={food3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="img-hight"
          className="d-block w-100 "
          src={food2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;