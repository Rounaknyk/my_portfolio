import styles from './page.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function TechStack() {
  const getTechIcon = (techName: string) => {
    const icons: { [key: string]: string } = {
      'JavaScript': 'JS',
      'React': '⚛️',
      'Node.js': '🟢',
      'Next.js': '⚡',
      'TypeScript': 'TS',
      'CSS/SASS': '🎨',
      'MongoDB': '🍃',
      'Firebase': '🔥'
    };
    return icons[techName] || '💻';
  };

  const getTechDescription = (techName: string) => {
    const descriptions: { [key: string]: string } = {
      'JavaScript': 'Core programming language for web development',
      'React': 'Modern UI library for building interactive interfaces',
      'Node.js': 'Runtime environment for server-side JavaScript',
      'Next.js': 'Full-stack React framework with SSR',
      'TypeScript': 'Typed superset of JavaScript for better development',
      'CSS/SASS': 'Styling and design implementation',
      'MongoDB': 'NoSQL database for scalable applications',
      'Firebase': 'Backend-as-a-Service platform'
    };
    return descriptions[techName] || 'Technology stack component';
  };

  return (
    <section className={styles.techStack}>
      <div className={styles.container}>
        <h1>My Tech Stack</h1>
        <div className={styles.techGrid}>
          {portfolioData.techStack.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.techIcon}>
                {getTechIcon(tech.name)}
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
                {getTechDescription(tech.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}