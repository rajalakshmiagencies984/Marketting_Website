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
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00698e" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className={`${styles.container}`}>
        <p className={` ${styles.heading} mx-5`}>Our Products</p>
        <div className={`row ${styles.productsList}`}>
            {category.map((c,i)=>(
                <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.productList}`} style={{backgroundColor:c.color}}>
                    <ProductCard key={i} {...c} />
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Products