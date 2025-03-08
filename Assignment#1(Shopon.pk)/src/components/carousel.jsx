import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function MyCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
      <img
          className="carouselImg d-block w-100"
          src="/carousel1.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carouselImg d-block w-100"
          src="carousel2.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carouselImg d-block w-100"
          src="carousel3.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="carouselImg d-block w-100"
          src="carousel4.png"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>forth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;