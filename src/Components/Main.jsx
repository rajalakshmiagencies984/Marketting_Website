import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../assets/logo.png'
import styles from '../styles/Main.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Main = () => {
    const router = useRouter()
    const timeoutId = setTimeout(() => {
        navigate();
    }, 8000)
    const navigate = () => {
        router.push("/Second");
        return () => clearTimeout(timeoutId);
    }
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>

            </div>
            <video className={styles.video} src={require('../../public/main.mp4')} autoPlay loop muted />
            <div className={styles.floating}>
                <div>
                    <Image src={img} height={96} width={96} alt="logo" className={styles.logo} />
                </div>
                <div className={styles.brand}>
                    Rajalakshmi Agencies
                </div>
                <div>
                    <Link href="/Second" className='btn btn-light btm-md' >Open our website</Link>
                </div>
            </div>

        </div>


    )
}

export default Main

{/* <><div className={`row ${styles.container}`}>
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

            </div>


            </> */}
