import React from 'react'
import './header.css'
import Link from 'next/link'

export default function Header() {
    
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between">

      <div className="logo">
        <h1><Link href="index">Maxim</Link></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" href="#hero">Home</Link></li>
          <li><Link className="nav-link scrollto" href="#about">About</Link></li>
          <li><Link className="nav-link scrollto" href="services">Services</Link></li>
          <li><Link className="nav-link scrollto " href="Portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" href="team">Team</Link></li>
          <li className="dropdown"><Link href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link href="#">Drop Down 1</Link></li>
              <li className="dropdown"><Link href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link href="#">Deep Drop Down 1</Link></li>
                  <li><Link href="#">Deep Drop Down 2</Link></li>
                  <li><Link href="#">Deep Drop Down 3</Link></li>
                  <li><Link href="#">Deep Drop Down 4</Link></li>
                  <li><Link href="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link href="#">Drop Down 2</Link></li>
              <li><Link href="#">Drop Down 3</Link></li>
              <li><Link href="#">Drop Down 4</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" href="#contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}
