'use client'
import React from 'react'
import { Col, Row, Container, Carousel} from 'react-bootstrap'
import Image from "next/image";
import portfolio9 from '@/app/Images/portfolio-9.jpg';
import portfolio2 from '@/app/Images/portfolio-2.jpg';
import portfolio3 from '@/app/Images/portfolio-3.jpg';
import portfolio4 from '@/app/Images/portfolio-4.jpg';
import Style from "./Imagecss.module.css";
  
function Imageslider() {
  return(
  <>
<Container>
  <Row>
    <Col>
<Carousel fade variant='dark'>
  
  <Carousel.Item interval={500}>
    <Image
      src={portfolio2}
      // width={1200}
      height={300}
      className={Style.Imagecss}
    />
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Image
      src={portfolio3}
      // width={900}
       height={300}
      className={Style.Imagecss}
    />
</Carousel.Item>
  <Carousel.Item interval={500}>
    <Image
      src={portfolio4}
      // width={900}
       height={300}
      className={Style.Imagecss}
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image
      src={portfolio3}
      // width={900}
       height={300}
      className={Style.Imagecss}
    />
  </Carousel.Item>
</Carousel>
    </Col>
  </Row>
</Container></>
  )
}

export default Imageslider