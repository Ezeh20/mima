import Image from 'next/image'
import styles from './Section3.module.scss'
import { constants } from './constant'
import { CiLocationOn } from "react-icons/ci";
import { PiHeartStraightThin } from "react-icons/pi";


export const Section3 = () => {
    return (
        <section className={styles.section3}>
            <p className='header'>Best Offers</p>
            <div className={styles.cardContainer}>
                {
                    constants.map(({ id, img, location, price, title }) => {
                        return (
                            <div key={id} className={styles.card}>
                                <Image src={img} alt={title} className={styles.img} />
                                <div className={styles.content}>
                                    <p className={styles.title}>{title}</p>
                                    <div className={styles.location}>
                                        <CiLocationOn className={styles.icn} />
                                        <p className={styles.local}>{location}</p>
                                    </div>
                                    <div className={styles.pii}>
                                        <div className={styles.price}>
                                            <p className={styles.pri}>{price} <span className={styles.span}>/night</span></p>
                                        </div>
                                        <div className={styles.icnCon}>
                                            <PiHeartStraightThin className={styles.icn} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
