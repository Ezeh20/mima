"use client";
import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { LiaEdit } from "react-icons/lia";
import user from "/public/assets/user.jpg";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { constant } from "@/app/constants/sidebar";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <main
      className={
        active
          ? `${styles.sidebar} ${styles.sidebarActive}`
          : `${styles.sidebar}`
      }>
      <section className={styles.top}>
        <p className={styles.logo}>
          Mima<span className={styles.span}>Booking</span>
        </p>
        <div className={styles.userContainer}>
          <Image src={user} alt="user" className={styles.user} />
          <div className={styles.editContainer}>
            <LiaEdit className={styles.edit} />
          </div>
        </div>
        <p className={styles.name}>ilia jan</p>
      </section>
      <section className={styles.tabs}>
        {constant.map((itm) => {
          const { id, text, icon } = itm;
          return (
            <div
              key={id}
              className={
                id === currentTab
                  ? `${styles.single}`
                  : `${styles.single} ${styles.singleAlt}`
              }
              onClick={() => setCurrentTab(id)}>
              {icon(styles.icon)}
              <p className={styles.text}>{text}</p>
              {id === currentTab ? (
                <div className={styles.active} />
              ) : undefined}
            </div>
          );
        })}
      </section>
      <section className={styles.logout}>
        <TfiArrowCircleRight />
        Logout
      </section>
      <BsArrowLeftRight
        className={styles.toggle}
        onClick={() => setActive((pre) => !pre)}
      />
    </main>
  );
};

export default Sidebar;
