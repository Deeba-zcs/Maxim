import React from 'react'
import Image from 'next/image'
import img1 from './img/team-1.jpg';
import img2 from './img/team-2.jpg';
import img3 from './img/team-3.jpg';
import img4 from './img/team-4.jpg';
import Link from 'next/link';




export default function Team()  {
  return (
    <>
    {/* <Header />
    <br/><br/><br/><br/><br/><br/>
    <Services /> */}
    <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2 align="center">Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div className="member">
              <Image src={img1} className="img-fluid" alt="" width={0} height={0} />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <Image src={img2} className="img-fluid" alt="" width={0} height={0} />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <Image src={img3} className="img-fluid" alt="" width={0} height={0} />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
            <div className="member">
              <Image src={img4} className="img-fluid" alt="" width={0} height={0} />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
                <div className="social">
                  <Link href=""><i className="bi bi-twitter"></i></Link>
                  <Link href=""><i className="bi bi-facebook"></i></Link>
                  <Link href=""><i className="bi bi-instagram"></i></Link>
                  <Link href=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <Footer /> */}
    </>
  )
}
