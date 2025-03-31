import React from "react";
import PropTypes from "prop-types"; // Add this import
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: {
    title = "",
    imageSrc = "",
    description = "",
    skills = [], // Default empty array
    demo = "",
    source = ""
  } = {} // Default empty object if project is undefined
}) => {
  // Validate required fields
  if (!title || !imageSrc) {
    console.error("ProjectCard is missing required props: title and imageSrc");
    return null; // or return a placeholder div
  }

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      
      {/* Safely render skills */}
      {skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}
      
      <div className={styles.links}>
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

// Add PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string,
    source: PropTypes.string
  }).isRequired
};