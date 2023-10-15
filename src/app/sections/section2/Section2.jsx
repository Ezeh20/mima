import styles from "./Section2.module.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { constant } from "./constants";
import Image from "next/image";

const points = [1, 2, 3];
export const Section2 = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.top}>
        <p className="header">Trending destinations</p>
        <div className={styles.arrowCon}>
          <div className={styles.arrC}>
            <MdOutlineKeyboardArrowLeft className={styles.arr} />
          </div>
          <div className={`${styles.arrC} ${styles.arrAlt}`}>
            <MdOutlineKeyboardArrowRight className={styles.arr} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {constant.map(({ id, title, img, rating, price, sub }) => {
          return (
            <div key={id} className={styles.card}>
              <Image
                width={90}
                height={95}
                src={img}
                alt={title}
                className={styles.img}
              />
              <div className={styles.half}>
                <div className={styles.first}>
                  <p className={styles.title}>{title}</p>
                  <div className={styles.rating}>
                    <AiTwotoneStar className={styles.icon} />
                    <p className={styles.rate}>{rating}</p>
                  </div>
                </div>
                <p className={styles.sub}>{sub}</p>
                <p className={styles.price}>{price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pointCon}>
        {points.map((itm, idx) => {
          return (
            <div
              key={itm}
              className={
                idx === 1
                  ? `${styles.point} ${styles.active}`
                  : `${styles.point}`
              }
            />
          );
        })}
      </div>
    </section>
  );
};
