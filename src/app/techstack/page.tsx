import styles from './page.module.css';
import { getTechStack } from '@/utils/config';

export default function TechStack() {
  const techStack = getTechStack();

  return (
    <section className={styles.techStack}>
      <div className={styles.container}>
        <h1>My Tech Stack</h1>
        <div className={styles.techGrid}>
          {techStack.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.techIcon}>
                {tech.icon}
              </div>
              <h2>{tech.name}</h2>
              <div className={styles.proficiencyBar}>
                <div 
                  className={styles.proficiencyLevel}
                  style={{ width: tech.proficiency === 'Advanced' ? '90%' : 
                           tech.proficiency === 'Intermediate' ? '70%' : '50%' }}
                ></div>
              </div>
              <p>{tech.proficiency}</p>
              <div className={styles.techDescription}>
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}