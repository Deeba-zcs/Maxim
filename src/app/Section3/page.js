//ABOUT SECTION 3 STARTS
'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
// {`bg-danger ${styles.features}`}
import "bootstrap/dist/css/bootstrap.min.css";
// import 'src\app\globals.css'
import styles from "./styles.module.css";

const Section3=()=>{
  //For tab
  const [activeTab, setActiveTab] = useState('tab-1');
  const [imageSrc, setImageSrc] = useState('https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-1.png');
  const handleTabClick = (tabId,newImageSrc) => {
    setActiveTab(tabId);
    setImageSrc(getImageSrc(tabId));
  };
  const getImageSrc = (tabId) => {
    switch (tabId) {
      case 'tab-1':
        return 'https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-1.png';
      case 'tab-2':
        return 'https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-2.png';
      case 'tab-3':
        return 'https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-3.png';
      case 'tab-4':
        return 'https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-4.png';
      default:
        return '/default-image.jpghttps://bootstrapmade.com/demo/templates/Maxim/assets/img/features-1.png';
    }
  };
  // For on click images
  return (
    <div>
      <section id="features" className='features'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate" data-aos='fade-right'>
              <ul className="nav nav-tabs flex-column" role='tablist'>
                <li className="nav-item mt-2" role='presentation'>
                <a
            className='nav-link show active'
            data-bs-toggle="tab"
            role="tab"
            aria-selected='true'
            // style={{ color: 'black' }}
            onClick={() => handleTabClick('tab-1')}
            
          >
                    <h4>Modi sit est</h4>
                    <p>
                      Quis excepturi porro totam sint earum quo nulla
                      perspiciatis eius.{" "}
                    </p>
                    </a>
                </li>
                 
                <li className="nav-item mt-2" role='presentation'>
                <a
            className='nav-link'
            // data-bs-toggle="tab"
            // role="tab"
            // aria-selected='false'
            // tabindex='-1'
            // ${activeTab === 'tab-2' ? 'active show' : ''}`}
            onClick={() => handleTabClick('tab-2')}
            // style={{ color: 'black' }}
            
          >
                  <h4>Unde praesentium sed</h4>
                  <p>Voluptas vel esse repudiandae quo excepturi. </p>
                        </a>
                </li>
                <li className="nav-item mt-2" role="presentation">
                <a
            className='nav-link' 
            // ${activeTab === 'tab-3' ? 'active show' : ''}`}
            onClick={() => handleTabClick('tab-3')}
            // style={{ color: 'black' }}
            
          >
                  <h4>Pariatur explicabo vel</h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                  </a>
                </li>
                <li className="nav-item mt-2" role="presentation">
                <a
            className='nav-link' 
            // ${activeTab === 'tab-4' ? 'active show' : ''}`}
            onClick={() => handleTabClick('tab-4')}
            // style={{ color: 'black' }}
            
          >
                  <h4>Nostrum qui quasi</h4>
                  <p>
                    Ratione hic sapiente nostrum doloremque illum nulla
                    praesentium id
                  </p>
                  </a>
                  
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto aos-init aos-animate" data-aos='fade-left'>
              <div className='tab-content'>
                <div class='tab-pane active show' role='tabpanel'>
                <Image
                src={imageSrc}
                alt="error 1"
                className={styles.myCustomClass}
                width={500}
                height={450}
              />
                </div>
             
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .features{
        padding: 60px;
        overflow: hidden;
        display: block;
      }
      .features .nav-link {
        border: 0;
        padding: 20px;
        transition: 0.3s;
        color: #21413c;
      }
      .features .nav-link:hover {
        color: #1bac91;
      }
      .features .nav-link h4 {
        font-size: 18px;
        font-weight: 600;
      }
      
      .features .nav-link p {
        font-size: 14px;
        margin-bottom: 0;
      }
      .features .nav-link.active {
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.12);
      }
      
      .features .nav-link.active h4 {
        color: #1bac91;
      }
      .features .nav-tab.active {
        animation: slide-down 0.5s ease-out;
      }
        
      `}</style>
    </div>
  );
}
export default Section3
//ABOUT SECTION 3 ENDS
