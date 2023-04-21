import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
const Navbar = () => {
  return (
   <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src={img} alt="image" height={24} width={24} className={styles.logoImage} />
        </div>
        <div className={styles.brand}>
            Rajalkshmi Agencies
        </div>
      </div>
      <div>

      </div>
   </nav>
  )
}

export default Navbar

