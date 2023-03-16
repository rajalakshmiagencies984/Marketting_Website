import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
const Navbar = () => {
  return (
   <nav className={`navbar shadow sticky-top navbar-expand-lg navbar-dark bg-dark ${styles.navbarContainer}`}>
    <div className="container-fluid">
      <div className={`navbar-brand ${styles.logoContainer}`}>
        <div className="img-container">
            <Image src={img} alt="brand-logo" height={32} width={32} />
        </div>
        <div className={styles.brandName}>
          Rajalakshmi Agencies
        </div>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
        </ul>
   
      <div className="navbar-nav ml-auto">

        <a className="nav-link" href="/login"><i className="fa-solid fa-person-hiking"></i> Login</a>
        <a className="nav-link" href="/register"><i className="fa-solid fa-registered"></i> Register</a>
       
    </div>
    </div>
</div>
  </nav>
  )
}

export default Navbar