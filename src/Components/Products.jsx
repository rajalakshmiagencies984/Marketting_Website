import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/Products.module.scss'

const Products = () => {

    const category = [
        {title:"Insecticide",color:"#00cb75"},
        {title:"Fungicide",color:"#00aa95"},
        {title:"Crop Enhancement",color:"#00aa95"},
        {title:"Herbicides",color:"#a5e887"},
        {title:"Fertilizers",color:"#00cb75"},
        {title:"Seeds",color:"#a5e887"}
  ]

  return (
    <div className='container my-3'>
        <p className={styles.heading}>Our Products</p>
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