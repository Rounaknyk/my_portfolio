import Image from 'next/image';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1>My Projects</h1>
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.projectContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}