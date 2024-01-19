import React from 'react'
import { Button , Carousel} from 'react-bootstrap'
import data from '../shared/constant/constantData'
function MyCarousel() {
    return (
        <div>
            <h2>Carousel component</h2>
            <Button>React button</Button>{" "}
            <Button variant='success'>React Button</Button>
            <hr/>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={data.image} alt="image" style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={data.image2} alt='image2'style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={data.coffee} alt='coffee' style={{width:"80%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MyCarousel
