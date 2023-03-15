import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
const Footer = () => {
  return (
    <div  className={styles.container}>
     <div className={`navbar-brand ${styles.logoContainer}`}>
        <div style={{marginLeft:"10%"}}>
            <Image src={img} alt="logo" height={45} width={35} />
        </div>
        <div >
          Rajalakshmi Agencies
        </div>
      </div>
      <span className={styles.container}><p style={{marginRight:"3%"}}>Privacy Policy </p>
      <p style={{marginRight:"3%"}}>Terms and Conditions of Use</p>
      <p style={{marginRight:"3%"}}>Listen . Learn . Deliver</p>
      <p>Copyright &copy; 2023</p></span>
    </div>
  )
}

export default Footer