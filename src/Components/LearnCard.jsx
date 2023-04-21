import React from 'react'
import store from '../assets/about.png'
import Image from 'next/image'
import styles from '../styles/LearnCard.module.scss'
const LearnCard = ({ name, address }) => {
  return (
    <div className={`col-sm-12 col-md-4 my-3  shadow ${styles.cardcontainer}`}>
      <div>
        <Image src={store} alt="store" className={styles.image}/>
      </div>
      <div className={styles.title}>
        {name}
      </div>
      <div className={`text-center ${styles.address}`}>
        <p>{address}</p>
      </div>
      <div className={styles.link}>
        <button className='btn btn-light'>Read more &rarr;</button>
      </div>
    </div>
  )
}

export default LearnCard