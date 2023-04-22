import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../assets/farmer.png'
import styles from '../styles/Main.module.scss'

const Main = () => {
    const quotes = [
        "Fertilizer does no good in a heap, but a little spread around works miracles all",
        "This is a basic problem, to feed 6.6 billion people. Without fertilizer, forget it. The game is over.",
        "Two out of every five people on Earth today owe their lives to the higher crop outputs that fertilizer has made possible."
    ]

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
             
           </div>
        </div>
    )
}

export default Main