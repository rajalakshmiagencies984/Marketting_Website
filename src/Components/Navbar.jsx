import React,{useState,useEffect} from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import img from '../assets/logo.png'

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(()=>{
    window.addEventListener('scroll', changeNavbarColor);

  })
  return (
   <nav className={colorChange ? [styles.navbar,styles.colorChange ]: styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src={img} alt="image" height={24} width={24} className={styles.logoImage} />
        </div>
        <div className={styles.brand}>
            Rajalkshmi Agencies
        </div>
      </div>
   </nav>
  )
}

export default Navbar

