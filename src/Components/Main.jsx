import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../assets/logo.png'
import styles from '../styles/Main.module.scss'

const Main = () => {
    const quotes = [
        "Fertilizer does no good in a heap, but a little spread around works miracles all",
        "This is a basic problem, to feed 6.6 billion people. Without fertilizer, forget it. The game is over.",
        "Two out of every five people on Earth today owe their lives to the higher crop outputs that fertilizer has made possible."
    ]
    
  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
            <div className="content mx-5">
                    <Image src={img} alt={"logo"} height={100} width={100} />
                    <p className={styles.brand}>Rajalakshmi Agencies</p>
            </div>
            <div className="mx-5 my-3">
                    <div className={styles.quote}>
                        {quotes[0]}
                    </div>
            </div>
           
        </div>
    <div className={styles.bottom}>

    </div>
    </div>
  )
}

export default Main