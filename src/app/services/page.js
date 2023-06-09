import React from "react";
import "./page.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from "next/link";
import Team from "../team/page";


export default function Services() {
  return (
    <div>
      <section id="services" className="services section-bg pb-5 pt-5">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2 className="text-center pb-2 font-bold text-4xl">Services</h2>
            <p className="text-center pb-2">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
            >
              <div className="icon-box icon-box-pink">
                <div className="icon mb-3">
                <i className="bi bi-dribbble"></i>
                </div>
                <h4 className="title">
                  <Link href="" className="linkss">Lorem Ipsum</Link>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box icon-box-cyan">
                <div className="icon mb-3">
                <i className="bi bi-file-earmark"></i>
                </div>
                <h4 className="title">
                  <Link href="" className="linkss">Sed ut perspiciatis</Link>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box icon-box-green">
                <div className="icon mb-3">
                <i className="bi bi-speedometer2"></i>
                </div>
                <h4 className="title">
                  <Link href="" className="linkss">Magni Dolores</Link>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box icon-box-blue">
                <div className="icon mb-3">
                <i className="bi bi-globe-americas"></i>
                </div>
                <h4 className="title">
                  <Link href="" className="linkss">Nemo Enim</Link>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      {/* <Team/> */}
    </div>
  );
}
