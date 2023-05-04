import React from 'react'
import styles from '../styles/Learn.module.scss'
import LearnCard from './LearnCard'

const Learn = () => {

    const locations = [
        {
            background:"#00aa95",
            name: "About Us",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",

        },

        {
            background:"#a5e887",
            name: "Our Team",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",
        },

        {
            background:"#00cb75",
            name: "Contact Us",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",
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