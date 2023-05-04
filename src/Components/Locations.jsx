import React from 'react'
import styles from '../styles/Locations.module.scss'
import LocationCard from './LocationCard'

const Locations = () => {

    const locations =[
        {
            name:"Koduvai",
            address:"Rajalakshmi Agencies Dharapuram Main Road,Koduvai - 638660.",
            phone:9080148814,
            map:"https://goo.gl/maps/g2rabfi4vKkUsWHc8",
            background:"#00aa95",
            color:"white"
        },
        
          {
            name:"Peruntholuvu",
            address:"Rajalakshmi Agencies Dharapuram Main Road,Koduvai - 638660.",
            phone:9842406979,
            map:"https://goo.gl/maps/g2rabfi4vKkUsWHc8",
            background:"#a5e887",
            color:"black"
        },
        
           {
            name:"Kundadam",
            address:"Rajalakshmi Agencies Dharapuram Main Road,Koduvai - 638660.",
            phone:8667259481,
            map:"https://goo.gl/maps/g2rabfi4vKkUsWHc8",
            background:"#00cb75",
            color:"white"
        
        }
        
    ]
  return (

    <div className={styles.container}>
        <p className={` ${styles.heading}`}>Our Locations</p> 
        <div className={` row ${styles.locationsList}`}>
            {locations.map((l,i)=>(
                <LocationCard key={i} {...l} />
              
            ))}
        </div>
    </div>
  )
}

export default Locations