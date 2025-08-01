import styles from './page.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>{portfolioData.personalInfo.bio}</p>
            <h2>Education</h2>
            <p>Bachelor's in Computer Science from University of Technology, with a focus on web development and software engineering. Graduated with honors and completed several industry certifications.</p>
            <h2>Experience</h2>
            <p>3+ years of experience in full-stack development, working with startups and established companies. Specialized in React, Node.js, and modern web technologies.</p>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {portfolioData.techStack.map((tech, index) => (
                <li key={index} data-proficiency={tech.proficiency}>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profileCard}>
              <h3>Quick Stats</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>25+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>8</span>
                  <span className={styles.statLabel}>Technologies</span>
                </div>
              </div>
            </div>
            <div className={styles.profileCard}>
              <h3>What I Do</h3>
              <p>I create beautiful, functional web applications that solve real-world problems. From concept to deployment, I handle every aspect of the development process.</p>
            </div>
            <div className={styles.profileCard}>
              <h3>My Approach</h3>
              <p>I believe in writing clean, maintainable code and creating user experiences that are both beautiful and intuitive. Every project is an opportunity to learn and grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}