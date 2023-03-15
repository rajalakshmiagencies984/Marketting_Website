import React from 'react'
import styles from '../styles/About.module.scss'
import img1 from '../Components/bottle.js'

export default function About() {
    return (
        <div className='container'>
            <p className={`${styles.heading}`}>Learn About Us</p>
            {/* about us */}
            <div className='row' style={{ display: "flex" }}>

                <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
                    <img loading="lazy" src={img1} alt="About Us" />
                    <h2 class="card--title">About ADAMA </h2>
                    <div class="card--text">
                        ADAMA is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.
                    </div>
                    <div class=" button card--button">
                        <span class="icon-icon--arrow-right--white">Read more</span>
                    </div>
                </div>


                {/* our team */}

                <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
                    <img loading="lazy" src={img1}  alt="About Us" />
                    <h2 class="card--title">About ADAMA </h2>
                    <div class="card--text">
                        ADAMA is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.
                    </div>
                    <div class=" button card--button">
                        <span class="icon-icon--arrow-right--white">Read more</span>
                    </div>
                </div>


                {/* contact us */}

                <div className={`col-sm-12 col-md-6 col-lg-4 my-1 shadow mx-3 ${styles.cards}`}>
                    <img loading="lazy" src={img1} alt="About Us" />
                    <h2 class="card--title">About ADAMA </h2>
                    <div class="card--text">
                        ADAMA is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.
                    </div>
                    <div class=" button card--button">
                        <span class="icon-icon--arrow-right--white">Read more</span>
                    </div>
                </div>


            </div>
        </div>
    )
}
