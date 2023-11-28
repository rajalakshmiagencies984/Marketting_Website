import React from 'react'
import bottle from './bottle'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.scss'
import Link from 'next/link'
const ProductCard = ({title}) => {
  return (
    <div className={styles.container}>
    <div>
        <Image src={bottle} height={250} width={225} alt={title} className={styles.img} />
    </div>
    <div className={`mb-4 ${styles.title}`}>
        {title}
    </div>
    <div>
      <Link href={`/products/${title}`} className={'btn btn-md btn-light my-3'}>View</Link>
    </div>
     </div>
  )
}

export default ProductCard
