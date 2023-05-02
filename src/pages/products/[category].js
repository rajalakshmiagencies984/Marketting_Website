import React from 'react'
import bottle from '../../Components/bottle'
import styles from '../../styles/ProductDetails.module.scss'

const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.cont}>

  <div className = {styles.card}>
    <img src={bottle} alt="" />
    <div>
      <h2>
        Product name
      </h2>
      <p>
        details
     </p>
    </div>
  </div>

    </div>
    </div>
  )
}

export default Products
