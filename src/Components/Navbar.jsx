import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'

const Navbar = () => {



  return (
    <nav className={`navbar navbar-expand-lg container-fluid ${styles.navbar}`}>
      <div className="d-flex">
        <div className={styles.logo}>
          <a href="/">
            <Image src={img} alt="image" height={28} width={28} className={styles.logoImage} />
          </a>
        </div>
        <a href="/" style={{textDecoration:'none'}}>
        <div className={styles.brand}>
          Rajalkshmi Agencies
        </div>
        </a>
        <button className="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon d-flex justify-content-end align-items-center">
            <i className={`fas fa-bars ${styles.icon}`}></i>
          </span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navigation}`} id="navbarExample01" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#home">Home</a>

            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#aboutus">About Us</a>

            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#location">Locations</a>

            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#contactus">Contact Us</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

