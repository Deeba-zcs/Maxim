import Link from 'next/link'
import React from 'react'
import '../footer/page.css'

export default function Footer() {
  return (
    <>
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Maxim</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA<br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
              <div className="social-links mt-3">
                <Link href="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                <Link href="#" className="google-plus"><i className="bi bi-skype"></i></Link>
                <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link href="#">	<span className='text-green-400'>	&gt; </span> Home</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#">	<span className='text-green-400'>	&gt; </span> About us</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#">	<span className='text-green-400'>	&gt; </span> Services</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#">	<span className='text-green-400'>	&gt; </span> Terms of service</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#">	<span className='text-green-400'>	&gt; </span> Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link href="#"><span className='text-green-400'>	&gt; </span>	Web Design</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#"><span className='text-green-400'>	&gt; </span> Web Development</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#"><span className='text-green-400'>	&gt; </span> Product Management</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#"><span className='text-green-400'>	&gt; </span> Marketing</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link href="#"><span className='text-green-400'>	&gt; </span> Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" /> 
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Maxim</span></strong>. All Rights Reserved
      </div>
      
    </div>
  </footer>
  </>
  )
}
