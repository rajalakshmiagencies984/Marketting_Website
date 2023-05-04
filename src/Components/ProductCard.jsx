import React from 'react'
import bottle from './bottle'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.scss'
const ProductCard = ({title}) => {
  return (
    <div>
    <div>
        <Image src={bottle} height={225} width={225} className={styles.img} />
    </div>
    <div className={`mb-4 ${styles.title}`}>
        {title}
    </div>
     </div>
  )
}

export default ProductCard