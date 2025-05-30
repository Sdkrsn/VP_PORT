import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion"; // Animation library

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.title}
        >
          Hi, I'm Surendar VP!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.description}
        >
         lead Google's Pixel Carrier Engineering for Southeast Asia and India, with 20 years of experience in tech innovation. My expertise spans 5G, UWB, and SatCom, and I've contributed to products like Pixel, iPhone, and Apple Watch. Passionate about pushing boundaries in tech, I thrive on solving complex challenges and mentoring teams to build cutting-edge solutions.
        </motion.p>
        <motion.a
          href="/Surendar VP Resume.pdf"
          download="Surendar VP Resume"
          className={styles.contactBtn}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Download Resume
        </motion.a>
      </div>
      <motion.img
        src={getImageUrl("hero/VPS.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
