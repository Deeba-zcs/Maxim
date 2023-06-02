"use client";
import React, { useState } from "react";
import portfolio7 from "@/app/Images/portfolio-7.jpg";
import Style from "./portfolio.module.css";
import Image from "next/image";

import List from "./List";

function Portfolio() {
  const [item, setItem] = useState(List);
  const [activeButton, setActiveButton] = useState(null);
  const [buttonColor, setButtonColor] = useState("blue");

  const filterItem = (categItem, buttonId) => {
    setActiveButton(buttonId);
    const updateditem = List.filter((currElem) => {
      return currElem.category == categItem;
    });
    setItem(updateditem);
  };
  function mylist(buttonId) {
    setItem(List);
    setActiveButton(buttonId);
    console.log("List", List);
  }

  return (
    <>
    <div className={Style.test}></div>
      
      {/*Card*/}
      <div className={` container   py-3 ${Style.head}`}>
        <div className=" d-flex justify-content-center display-5 py-3">
          Portfolio
        </div>
        <p className="text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit.
          <br /> Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
          alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="d-flex justify-content-center">
          <div className={`my-3 ${Style.portfolioflters}`}>
            <button
              className={
                activeButton === 4 ? ` ${Style.fs1} mx-3` : ` ${Style.fs} mx-3`
              }
              onClick={() => mylist(4)}
            >
              All
            </button>
            <button
              id="btn1"
              className={
                activeButton === 1 ? ` ${Style.fs1} mx-3` : ` ${Style.fs} mx-3`
              }
              onClick={() => filterItem("App", 1)}
            >
              App
            </button>
            <button
              id="btn2"
              className={
                activeButton === 2 ? `${Style.fs1} mx-3` : ` ${Style.fs} mx-3`
              }
              onClick={() => filterItem("Card", 2)}
            >
              Card
            </button>
            <button
              id="btn3"
              className={
                activeButton === 3 ? ` ${Style.fs1} mx-3` : `${Style.fs} mx-3`
              }
              onClick={() => filterItem("Web", 3)}
            >
              Web
            </button>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            {item.map((d) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className={Style.containerr}>
                      <Image
                        src={d.imgsrc}
                        alt="Picture of the author"
                      
                        className={Style.image1}
                      />
                          
                      <div className={`card-body ${Style.overlayy}`}>
                        <div className={Style.textt}>
                          {d.title}
                          <br />
                          {<i className="fa-sharp fa-solid fa-plus fa-l"></i>}
                          {<i className="fa-sharp fa-solid fa-link fa-l p-3"></i>}
                         
                        </div>
                      
                    </div>
                  </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
