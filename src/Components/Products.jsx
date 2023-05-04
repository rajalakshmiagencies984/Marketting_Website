import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/Products.module.scss'

const Products = () => {

    const category = [
        {title:"Insecticide",color:"#BBD6B8",outline:'#94AF9F'},
        {title:"Fungicide",color:"#00aa95"},
        {title:"Crop Enhancement",color:"#00aa95"},
        {title:"Herbicides",color:"#a5e887"},
        {title:"Fertilizers",color:"#00cb75"},
        {title:"Seeds",color:"#a5e887"}
  ]

  return (
 
    <div className={styles.container}>
       

      
            <p className={`${styles.heading} mx-5`}>Our Products</p>
            <div className={`row ${styles.productsList}`}>
            {category.map((c,i)=>(
                <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.productList}`} style={{backgroundColor:c.color}}>
                <ProductCard key={i} {...c} />
                </div>
                ))}
            </div>

           
    </div>

  )
}

export default Products