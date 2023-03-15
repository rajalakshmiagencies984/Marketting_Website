import React from 'react'
import styles from '../styles/Footer.module.scss'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import store from "./store";

const Footer = () => {
  return (
    <div className='row' style={{display:"flex"}}>
      <div  className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
        <img src={store} alt="" /><br />
        <h2>Location : Koduvai</h2>
        <p className={styles.address} >
        <h4>Address </h4>
          <p>Rajalakshmi Agencies <br />Dharapuram Main Road,<br />Koduvai - 638660. </p>
        </p>
      </div>

      <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
        <img src={store} alt="" /><br />
        <h2>Location : Perunthuluvu</h2>
        <p className={styles.address} >
        <h4>Address </h4>
          <p>Rajalakshmi Agencies <br />Dharapuram Main Road,<br />Koduvai - 638660. </p>
        </p>
      </div>

      <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
        <img src={store} alt="" /><br />
        <h2>Location : Kundadam</h2>
        <p className={styles.address} >
        <h4>Address </h4>
          <p>Rajalakshmi Agencies <br />Dharapuram Main Road,<br />Koduvai - 638660. </p>
        </p>
      </div>
    </div>
  )
}

export default Footer