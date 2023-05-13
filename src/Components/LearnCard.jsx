import React from 'react'
// import store from '../assets/about.png'
import Image from 'next/image'
import styles from '../styles/LearnCard.module.scss'
const LearnCard = ({store, name, address,background }) => {
  return (
    <div className={`col-sm-12 col-md-4 my-3  shadow ${styles.container}`} style={{background}}>
      <div>
        <Image src={store} alt="store" className={styles.image} height={300} width={400}/>
      </div>
      <div className={styles.title}>
        {name}
      </div>
      <div className={`text-center ${styles.address}`}>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default LearnCard