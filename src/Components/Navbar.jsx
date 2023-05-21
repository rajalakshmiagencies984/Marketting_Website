import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
import Link from 'next/link'

const Navbar = ()=>{
  return(
    <nav class={`navbar navbar-expand-lg bg-light ${styles.navbar}`}>
    <div class="container-fluid">
      <div className="navbar-brand d-flex">
        <div className={styles.logo}>
          <Image src={img} alt="logo" height={28} width={28} className={styles.logoImage} />
        </div>
        <div className={styles.brand}>
          Rajalakshmi Agencies
        </div>
      </div>
      <button class="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon  btn btn-sm"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${styles.nav_link}`} aria-current="page" href="#home">Home</Link>

            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.nav_link}`} aria-current="page" href="#products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.nav_link}`} aria-current="page" href="#aboutus">About Us</Link>

            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.nav_link}`} aria-current="page" href="#location">Locations</Link>

            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.nav_link}`} aria-current="page" href="#contactus">Contact Us</Link>
            </li>
          </ul>
      </div>
    </div>
</nav>
  )
}

export default Navbar;

