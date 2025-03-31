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
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}} />
            <div className={styles.aboutItemText}>
              <h3>Tech Visionary</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Server icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}} />
            <div className={styles.aboutItemText}>
              <h3>Inventor</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}}/>
            <div className={styles.aboutItemText}>
              <h3>Engineer</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}}/>
            <div className={styles.aboutItemText}>
              <h3>Athlete</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}}/>
            <div className={styles.aboutItemText}>
              <h3>Investor</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" style={{width: '50px', height: '50px', display: 'inline-block', verticalAlign:'middle'}}/>
            <div className={styles.aboutItemText}>
              <h3>Philanthropist</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
