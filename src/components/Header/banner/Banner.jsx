import chef1 from '../../../assets/chef1.jpg'
// import food from '../../../assets/food.jpg'
import food2 from '../../../assets/food2.jpg'
import food3 from '../../../assets/food3.webp'
import "./Banner.css"
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

<h1 className='m-3 text-5xl text-center'>Make world happy
<br />
<span className='text-'>With Good Food</span></h1>
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
        <h1 className='m-3 text-5xl text-center'>Good food
<br />
<span className='text-'> For Good Live</span></h1>
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
        <h1 className='m-3 text-5xl text-center'>Indian Best Food
<br />
<span className='text-'> In one Pleace</span></h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;