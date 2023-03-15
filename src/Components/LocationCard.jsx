import React from 'react'
import store from './store'
import {mapIcon,wp} from './icons.js'
import Image from 'next/image'
import styles from '../styles/LocationCard.module.scss'
const LocationCard = ({name,address,map,phone,background,color}) => {
  return (
  <div className={`col-sm-12 col-md-4 my-3  shadow ${styles.container}`} style={{background,color}}>
      <div>
        <Image src={store} alt="store" height={225} width={250} />
      </div>
      <div className={styles.title}>
        {name}
      </div>
      <div className={`text-center ${styles.address}`}>
        <p>{address}</p>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
        <a href={map}  target="_blank">
          <Image src={mapIcon} alt="map" height={32} width={32} />
        </a>
         </div>
        <div className={styles.link}>
        <a href={`https://wa.me/${phone}`} target="_blank">
          <Image src={wp} alt="wp" height={32} width={32} />
        </a>
        </div>
      </div>
  </div>
  )
}

export default LocationCard