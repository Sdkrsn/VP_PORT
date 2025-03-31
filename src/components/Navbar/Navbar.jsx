import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a href="/" className={styles.logo}>Portfolio</a>
        
        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <nav>
            <ul>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Achievements & Patents</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};