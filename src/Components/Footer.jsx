import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
const Footer = () => {
  return (
    <div>
      <div className={` ${styles.foot}`}>
        <div className="row">
          <div className={`col-3 ${styles.subfoot}`}>
            <h6>OUR PRODUCTS</h6>
            <a href="">Insecticide</a><br />
            <a href="">Fungicide</a><br />
            <a href="">Crop Enhancement</a><br />
            <a href="">Herbicide</a><br />
            <a href="">Fertilizer</a><br />
            <a href="">Seed</a>
          </div>
          <div className='col-3'>
          <h6>COMPANY</h6>
            <a href="">About Us</a><br />
            <a href="">Our Team</a><br />
            <a href="">Contact Us</a>
          </div>
          <div className='col-3'>
          <h6>SOCIAL NETWORK</h6>
            email<br/>
            whatsapp<br/>
            instagram
          </div>
          <div className='col-3'>
             <Image src={img} alt="logo" height={150} width={150} />
          </div>
        </div>
      </div>

    
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
    </div>
  )
}

export default Footer