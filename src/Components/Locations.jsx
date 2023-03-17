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

     
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00698f" fill-opacity="1" d="M0,0L48,42.7C96,85,192,171,288,197.3C384,224,480,192,576,170.7C672,149,768,139,864,128C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className={styles.container}>
        <p className={` mx-5 ${styles.heading}`}>Our Locations</p> 
      
        <div className={` row ${styles.locationsList}`}>
            {locations.map((l,i)=>(
                <LocationCard key={i} {...l} />
              
            ))}
        </div>
        
    </div>
     </div>
    
  )
}

export default Locations