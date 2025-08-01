import styles from './page.module.css';
import { getPersonalInfo, getAboutPage, getTechStack } from '@/utils/config';

export default function About() {
  const personalInfo = getPersonalInfo();
  const aboutPage = getAboutPage();
  const techStack = getTechStack();

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>{aboutPage.title}</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>{personalInfo.bio}</p>
            <h2>{aboutPage.sections.education.title}</h2>
            <p>{aboutPage.sections.education.content}</p>
            <h2>{aboutPage.sections.experience.title}</h2>
            <p>{aboutPage.sections.experience.content}</p>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {techStack.map((tech, index) => (
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
                {aboutPage.stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.profileCard}>
              <h3>{aboutPage.sections.whatIDo.title}</h3>
              <p>{aboutPage.sections.whatIDo.content}</p>
            </div>
            <div className={styles.profileCard}>
              <h3>{aboutPage.sections.approach.title}</h3>
              <p>{aboutPage.sections.approach.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}