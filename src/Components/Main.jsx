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
            <div className={styles.app}>
                <div className={styles.text}>
                    The best way to get news on the go <br />
                    Download the App.

                </div>
                <div className={styles.appimg}>
                    <a className={styles.appstore} href="#">
                        <img src="https://uploads-ssl.webflow.com/5ef0d12f2cdb982e01422324/5fd791a2e1ad8f4361db27f5_image%20163-p-500.png" width="161" height="auto" border="0" />
                    </a>
                    <a className={styles.appstore} href="#">
                        <img src="https://uploads-ssl.webflow.com/5ef0d12f2cdb982e01422324/5fd791a2d660d3b6cbd8a1a9_image%20162.png" width="161" height="auto" border="0" />
                    </a>

                </div>
            </div>
            <div className={styles.bottom}>

            </div>

        </div>
    )
}

export default Main