"use client";
import React from "react";

import Style from "./testimonial.module.css";
import Image from "next/image";
import left from "./left.svg";
import right from "./right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Testimonials() {
  const persons = [
    {
      lines:
        " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ",
      imgsrc:
        "https://bootstrapmade.com/demo/templates/Maxim/assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      post: "Store Owner",
    },
    {
      lines:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      imgsrc:
        "https://bootstrapmade.com/demo/templates/Maxim/assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      post: "Freelancer",
    },
    {
      lines:
        " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      imgsrc:
        "https://bootstrapmade.com/demo/templates/Maxim/assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      post: "Entrepreneur",
    },
    {
      lines:
        " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      imgsrc: "https://bootstrapmade.com/demo/templates/Maxim/assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      post: "Designer",
    },
    {
      lines:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      imgsrc:
        "https://bootstrapmade.com/demo/templates/Maxim/assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      post: "Ceo & Founder",
    },
  ];
  return (
    <div className="container my-5">
      <div className="text-center py-1">
        <h1 className={`display-6 py-1 lead ${Style.fadeInUp}`}> Testimonials</h1>
        <p className={`${Style.text} ${Style.fadeInUp}`}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className={`container ${Style.fadeInUp}`}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{
              delay: 500,
              disableOnInteraction: false
          }}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          //  navigation
          pagination={{ clickable: true }}
          breakpoints= {{
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },
            499: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },
            // when window width is <= 999px
            999: {
                slidesPerView:3,
                spaceBetweenSlides: 20
            },
            1900: {
                slidesPerView:3,
                spaceBetweenSlides: 20
            }
        }

        }
          //  scrollbar={{ draggable: true }}
        >
          {persons.map((d) => {
            return (
              <>
                <div className="row">
                  <div className="col-lg-6">
                    <SwiperSlide className="">
                      <div className="my-4">
                        <div className="card rounded border-0">
                          <div className={`card-body  rounded ${Style.cardtext}`}>
                            <p className={`card-text pb-4 ${Style.card}`}>
                              <Image src={left} alt="Picture of the author" />
                              {d.lines}
                              <Image src={right} alt="Picture of the author" />
                            </p>
                          
                          </div>
                          <Image src={d.imgsrc}  width={70}
                            height={70} alt="Picture of the author"
                            className={`rounded-circle ms-4  border-0 ${Style.myimg}`}/>

                          <h4 className={` ms-4 pt-1 ${Style.name}`}>{d.name}</h4>
                          <h6 className={` ms-4 pt-0 ${Style.namecolor}`}>{d.post}</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              
              </>
            );
          })}
        </Swiper>
      </div>
      <style global>
        {`.swiper-pagination-bullet{
         
              width: 15px;
              height: 15px;
              opacity: 1;
              border: 1px solid #1bac91;
               background-color:white}
               .swiper-pagination-bullet.swiper-pagination-bullet-active{
                background-color:#1bac91;
               }
               `}
      </style>
    </div>
  );
}

export default Testimonials;
