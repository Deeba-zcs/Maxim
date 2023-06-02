"use client";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';
import "./need.css";
import { useState } from "react";
// import styles from './need.module.css'

function BasicExample() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="whole">
      <div className="accordion fs-5" id="accordionExample">
        <div className="item accordion-item">
          <h2
            className={`head accordion-header fs-4 ${
              activeIndex === 0 ? "active" : ""
            }`}
            id="headingOne"
          >
            <button
              className="what accordion-button focuss"
              type="button"
              onClick={() => handleAccordionToggle(0)}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="question w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Non consectetur a erat nam at lectus urna duis?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show focuss"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="desc accordion-body focuss">
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </div>
          </div>
        </div>

        <div className="item accordion-item">
          <h2 className="head accordion-header" id="headingTwo">
            <button
              className="what accordion-button focuss collapsed"
              type="button"
              onClick={() => handleAccordionToggle(1)}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="question w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Feugiat scelerisque varius morbi enim nunc?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="desc accordion-body focus">
              Dolor sit amet consectetur adipiscing elit pellentesque habitant
              morbi. Id interdum velit laoreet id donec ultrices. Fringilla
              phasellus faucibus scelerisque eleifend donec pretium. Est
              pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
              cursus turpis massa tincidunt dui.
            </div>
          </div>
        </div>

        <div className="item accordion-item">
          <h2 className="head accordion-header" id="headingThree">
            <button
              className="what accordion-button focuss collapsed"
              type="button"
              onClick={() => handleAccordionToggle(2)}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="question w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Dolor sit amet consectetur adipiscing elit?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="desc accordion-body focus">
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla
              pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
              eu tincidunt. Lectus urna duis convallis convallis tellus. Urna
              molestie at elementum eu facilisis sed odio morbi quisones.
            </div>
          </div>
        </div>

        <div className="item accordion-item">
          <h2 className="head accordion-header" id="headingFour">
            <button
              className="what accordion-button focuss collapsed"
              type="button"
              onClick={() => handleAccordionToggle(3)}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="question w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="desc accordion-body focus">
              Molestie a iaculis at erat pellentesque adipiscing commodo.
              Dignissim suspendisse in est ante in. Nunc vel risus commodo
              viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
              bibendum est. Purus gravida quis blandit turpis cursus in.
            </div>
          </div>
        </div>

        <div className="item accordion-item">
          <h2 className="head accordion-header" id="headingFive">
            <button
              className="what accordion-button focuss collapsed"
              type="button"
              onClick={() => handleAccordionToggle(4)}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="question w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis
              nunc eget lorem dolor?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="desc accordion-body focus">
              Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
              vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
              nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut
              venenatis tellus in metus vulputate eu scelerisque.
            </div>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
}

export default BasicExample;
