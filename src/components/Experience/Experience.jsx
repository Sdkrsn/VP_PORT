import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.timeline}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.companyLogo}
                />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{historyItem.role}</h3>
                  <h4 className={styles.company}>{historyItem.organisation}</h4>
                  <p className={styles.duration}>
                    {historyItem.startDate} — {historyItem.endDate}
                  </p>
                </div>
                <ul className={styles.responsibilities}>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className={styles.responsibility}>
                      <span className={styles.bullet}>•</span>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};