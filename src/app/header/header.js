import React from 'react'
import './header.css'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Header() {
    
  return (
    <header id="header" className="fixed-top d-flex align-items-center nav">
      <div className='container d-flex justify-content-between'>
      <div className="logo">
        <h1><Link href="index">Maxim</Link></h1>
      </div>
      

      <nav id="navbar" className="navbar pr-3">
        <ul>
          <li><Link className="nav-link scrollto active" href="#maxim">Home</Link></li>
          <li><Link className="nav-link scrollto" href="#section3">About</Link></li>
          <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
          <li><Link className="nav-link scrollto " href="#portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" href="#team">Team</Link></li>
          <li><Link className="nav-link scrollto" href="#test">Testimonials</Link></li>
          <li><Link className="nav-link scrollto" href="#contact">Contact</Link></li>
        </ul>
        
        <i className="bi bi-list mobile-nav-toggle"></i>
        
      </nav>

    </div>
  </header>
  )
}
