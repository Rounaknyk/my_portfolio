import Image from 'next/image';
import styles from './page.module.css';
import { getAwards } from '@/utils/config';

export default function Awards() {
  const awards = getAwards();

  return (
    <section className={styles.awards}>
      <div className={styles.container}>
        <h1>My Awards & Recognition</h1>
        <div className={styles.awardsList}>
          {awards.map((award) => (
            <div key={award.id} className={styles.awardItem}>
              <div className={styles.awardBadge}>Award</div>
              <div className={styles.awardYear}>{award.year}</div>
              <div className={styles.awardImage}>
                <Image
                  src={award.image}
                  alt={award.title}
                  width={400}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.awardContent}>
                <h2>{award.title}</h2>
                <p className={styles.organization}>{award.organization}</p>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}