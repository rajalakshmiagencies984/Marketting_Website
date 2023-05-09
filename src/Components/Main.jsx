import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../assets/logo.png'
import styles from '../styles/Main.module.scss'
import Slider from './Slider'

const Main = () => {
    const quotes = [
        "Fertilizer does no good in a heap, but a little spread around works miracles all",
        "This is a basic problem, to feed 6.6 billion people. Without fertilizer, forget it. The game is over.",
        "Two out of every five people on Earth today owe their lives to the higher crop outputs that fertilizer has made possible."
    ]

    return (

        <><div className={`row ${styles.container}`}>
            <div className={`${styles.animated_title}`}>
                <div className={styles.text_top}>
                    <div>
                        <span>
                            <Image src={img} alt="logo" height={150} width={150} className={`${styles.logo}`} />
                        </span>
                        <span>Rajalkshmi</span>
                    </div>
                </div>
                <div className={styles.text_bottom}>
                    <div>Agencies</div>
                </div>
            </div>
        </div><div>
                <Slider />
            </div></>
        
    )
}

export default Main