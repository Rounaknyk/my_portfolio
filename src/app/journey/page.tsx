import styles from './page.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function Journey() {
  const getJourneyIcon = (index: number) => {
    const icons = ['🚀', '💼', '🎯', '📚'];
    return icons[index] || '⭐';
  };

  return (
    <section className={styles.journey}>
      <div className={styles.container}>
        <h1>My Freelancing Journey</h1>
        <div className={styles.timeline}>
          {portfolioData.journey.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{item.year}</div>
              <div className={styles.timelineContent}>
                <div className={styles.journeyIcon}>
                  {getJourneyIcon(index)}
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}