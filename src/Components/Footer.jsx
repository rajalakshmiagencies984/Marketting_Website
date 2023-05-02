import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
import { instagram, gmail, whatsapp } from './logos'
// import Button from 'components/CustomButtons/Button.js';
const Footer = () => {
  const products = ['Fungicides', "Insecticide", "Fungicide", "Crop Enhancement", "Herbicides", "Fertilizers", "Seeds",]
  const extra = ["About Us", "Our Team", "Contact Us"]
  const logos = [whatsapp, gmail, instagram];

  return (

    <><div className={`${styles.foot}`}>
      <div className={`row ${styles.container}`}>
        <div className={`col-3 ${styles.subfoot}`}>
          <h6>OUR PRODUCTS</h6>
          {products.map((p, i) => (
            <p className='p-0 m-1' key={i}>{p}</p>
          ))}
        </div>
        <div className='col-3'>
          <h6>COMPANY</h6>
          {extra.map((e, i) => (
            <p key={i} className="p-0 m-0">{e}</p>
          ))}
        </div>
        <div className='col-3'>
          <h6>SOCIAL NETWORK</h6>
          <div className={styles.socialContainer}>
            {logos.map((l, i) => (
              <div className={`shadow ${styles.socialLogos}`} key={i}>
                <Image src={l} alt={`logo_${i}`} height={24} width={24} className={`${styles.social}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={`col-3 mt-2 ${styles.logo}`}>
          <Image src={img} alt="logo" height={90} width={90} className='mt-2' />
          <h5 className={styles.brand}>Rajalkshmi Agencies</h5>
          <h5>Send Feedback</h5>
          <button className={`btn ${styles.link}`}>Feedback &rarr;</button>
        </div>
      </div>
      </div>
      <div className={styles.copyright}>
      © 2023 All rights reserved. Rajajakshmi Agencies
    </div></>
  )
}

export default Footer