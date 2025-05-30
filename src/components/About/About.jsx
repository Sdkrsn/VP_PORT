import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/guy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Tech Visionary:</h3>
              <p>
                Prototyped and developed technologies like{" "}
                <a href="https://en.wikipedia.org/wiki/5G_NR" target="_blank" rel="noopener noreferrer">5G NR</a>,{" "}
                <a href="https://en.wikipedia.org/wiki/Ultra-wideband" target="_blank" rel="noopener noreferrer">UWB</a>,{" "}
                <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer">IEEE standards</a>, and{" "}
                <a href="https://en.wikipedia.org/wiki/Satellite_communication" target="_blank" rel="noopener noreferrer">3G Com</a>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Inventor:</h3>
              <p>Filed multiple patents and mentored high-performing tech teams.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Engineer:</h3>
              <p>Led product launches including{" "}
                <a href="https://store.google.com/us/product/pixel_phone" target="_blank" rel="noopener noreferrer">Pixel Phone</a>,{" "}
                <a href="https://store.google.com/us/product/pixel_watch" target="_blank" rel="noopener noreferrer">Pixel Watch</a>,{" "}
                <a href="https://www.amazon.com/firetv" target="_blank" rel="noopener noreferrer">FireTV</a>,{" "}
                <a href="https://www.apple.com/iphone/" target="_blank" rel="noopener noreferrer">iPhone</a>,{" "}
                <a href="https://www.apple.com/ipad/" target="_blank" rel="noopener noreferrer">iPad</a>, and{" "}
                <a href="https://www.apple.com/watch/" target="_blank" rel="noopener noreferrer">Apple Watch</a>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Athlete:</h3>
              <p>Bringing discipline, resilience, and a growth mindset to everything I do.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Investor:</h3>
              <p>Passionate about identifying impactful technologies and funding future innovations.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.headingWithContent}>
              <h3>Lifelong Learner:</h3>
              <p>Always exploring, experimenting, and staying at the cutting edge of tech.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};