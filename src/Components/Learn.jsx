import React from 'react'
import styles from '../styles/LearnCard.module.scss'
import LearnCard from './LearnCard'

const Learn = () => {

    const locations = [
        {
            name: "About Us",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",

        },

        {
            name: "Our Team",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",
        },

        {
            name: "Contact Us",
            address: "Rajalakshmi Agencies is one of the world leaders in crop protection. With our complete portfolio of solutions, we put into practice our purpose of bringing simplicity to agriculture.",
        }

    ]
    return (
        <div className='container'>
            <p className={`${styles.heading}`}>Learn About Us</p>
            <div className={` row ${styles.locationsList}`}>
                {locations.map((l, i) => (
                    <LearnCard key={i} {...l} />

                ))}
            </div>

        </div>
    )
}

export default Learn