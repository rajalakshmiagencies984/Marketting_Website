import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/Products.module.scss'

const Products = () => {

    const category = [
        {title:"Insecticide",color:"#E4D0D0",outline:'#94AF9F'},
        {title:"Fungicide",color:"#A0C3D2"},
        {title:"Crop Enhancement",color:"#CEEDC7"},
        {title:"Herbicides",color:"#E4D0D0"},
        {title:"Fertilizers",color:"#A0C3D2"},
        {title:"Seeds",color:"#CEEDC7"}
  ]

  return (

    <div className={styles.container}>
            <p className={`${styles.heading} mx-5`}>Our Products</p>
            <div className={`row ${styles.productsList}`}>
            {category.map((c,i)=>(
                <div key={i} className={`m-auto col-sm-6 col-md-6 col-lg-4 my-1 shadow ${styles.productList}`} style={{backgroundColor:c.color}}>
                  <ProductCard key={i} {...c} />
                </div>
                ))}
            </div>
    </div>

  )
}

export default Products
