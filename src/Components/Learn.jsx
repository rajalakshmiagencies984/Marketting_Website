import React from 'react'
import styles from '../styles/Learn.module.scss'
import LearnCard from './LearnCard'
import team from '../assets/OurTeam.jpg'
import about from '../assets/about.png'
import contact from '../assets/contact.jpg'

const Learn = () => {

    const locations = [
        {
            background:"#00aa95",
            name: "About Us",
            store:about,
            address: "One of the top businesses for crop protection in agriculture is Rajalakshmi Agencies. With our comprehensive suite of products, we carry out our goal of making agriculture simpler.",

        },

        {
            background:"#a5e887",
            name: "Our Team",
            store:team,
            address: "We have a strong human resource pool to help you in your location. We send qualified professionals to inspect your fields.",
        },

        {
            background:"#00cb75",
            name: "Contact Us",
            store:contact,
            address: "We have offline stores at three different locations. At any time you can contact through WhatsApp, Email or through phone.",
        }

    ]
    return (
        <div className={styles.container}>
            <p className={`  ${styles.heading}`}>About Us</p>
            <div className={` row ${styles.locationsList}`}>
                {locations.map((l, i) => (
                    <LearnCard key={i} {...l} />

                ))}
            </div>

        </div>
    )
}

export default Learn