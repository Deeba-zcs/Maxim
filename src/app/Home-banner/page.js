import React from 'react';
import styles from './maxim.css';
import Link from 'next/link';

function Maxim() {
  return (
    <div className='super' id='maxim'>
      
      <section className='overlay'>
      <div id="hero" className="hero 
      d-flex flex-column justify-content-center align-items-center
      ">
        <div className="pop container text-center text-md-left aos-init aos-animate" data-aos="fade-up">
          <h1 className='top'>Welcome to Maxim</h1>
          <h2 className='bottom'>We are a team of talented designers making websites with Bootstrap</h2>
          <Link href="/Trials" className="button btn-get-started scrollto">GET STARTED</Link>

          {/* <img src='https://bootstrapmade.com/demo/templates/Maxim/assets/img/hero-bg.jpg' alt='heyy'/> */}
        </div>
      </div>
      </section>

   
     




    </div>
  );
}

export default Maxim;
