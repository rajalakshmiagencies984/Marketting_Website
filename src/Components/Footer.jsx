import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'
import { instagram,gmail,whatsapp } from './logos'
const Footer = () => {
  const products = ['Fungicides',"Insecticide","Fungicide","Crop Enhancement","Herbicides","Fertilizers","Seeds",]
  const extra= ["About Us","Our Team","Contact Us"]
  const logos=[whatsapp,gmail,instagram];

  return (
    
    <div className={styles.container}>
         
            <div className={styles.productsContainer}>
                <p className={styles.title}>
                    Our Product
                </p>
                <div className="products">
                    {products.map((p,i)=>(
                      <p className={styles.product} key={i}>{p}</p>
                    ))}
                </div>
          </div>

          <div>
            <h6>SOCIAL NETWORK</h6>
            <div className={styles.socialContainer}>
            {logos.map((l,i)=>(
                <div className={`mb-2 shadow ${styles.socialLogos}`} key={i}>
                    <Image src={l} alt={`logo_${i}`} height={24} width={24}  />
                </div>     
            ))}
          </div>
      </div>
          
    </div>
  )
}


export default Footer


