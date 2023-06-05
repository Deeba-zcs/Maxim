"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import portfolio10 from "@/app/Images/portfolio-10.jpg";
import portfolio12 from "@/app/Images/portfolio12.jpg";
import portfolio11 from "@/app/Images/portfolio-11.jpg";
import portfolio4 from "@/app/Images/portfolio-4.jpg";
import Style from "./innerportal.module.css";
import Link from "next/link";
function page() {


  return (
   
   <>
   <style jsx global>
    {
        `.carousel-dark .carousel-indicators [data-bs-target]
        { 
            border-radius: 50%;
            height:8px;
            width:10px;     
            background-color: #1bac91; 
               }
               .carousel-control-prev-icon {
                    background-image:none
                }

               
                .carousel-control-next-icon {
                    background-image:none
                }

             
                .carousel-indicators{
margin-bottom: -2rem !important;
}
                 
               `
    }
   </style>
   
      <section className={Style.breadcrumbs}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li>
                <Link href={"/Home"} className={Style.textt}>Home</Link>
              </li>
              <li>
                <Link href={"/Portfolio"} className={Style.textt}>Portfolio</Link>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfoliodetails" className={Style.portfoliodetails}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Carousel fade variant="dark" >
                <Carousel.Item interval={300}>
                  <Image id={1} src={portfolio12} className={Style.Imagecss} />
                </Carousel.Item>

                <Carousel.Item interval={300}>
                  <Image id={2} src={portfolio10} className={Style.Imagecss} />
                </Carousel.Item>
                <Carousel.Item interval={300}>
                  <Image id={3} src={portfolio11} className={Style.Imagecss} />
                </Carousel.Item>
               
              </Carousel>
            </div>

            <div className="col-lg-4">
              <div className={Style.portfolioinfo}>
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#" className={Style.textt}>www.example.com</a>
                  </li>
                </ul>
              </div>
              <div className={Style.portfoliodescription}>
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
