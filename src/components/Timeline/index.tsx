import React from 'react';
import { CareerEntry } from '@site/src/data/career';
import styles from './styles.module.css';

interface Props { entries: CareerEntry[]; }

export default function Timeline({ entries }: Props): JSX.Element {
  const sorted = [...entries].sort((a, b) => b.period.start.localeCompare(a.period.start));
  return (
    <div className={styles.timeline}>
      {sorted.map((entry) => (
        <div key={entry.id} className={styles.timelineItem}>
          <div className={styles.dot} />
          <div className={styles.card}>
            <div className={styles.organization}>{entry.organization}</div>
            <div className={styles.role}>{entry.role}</div>
            <div className={styles.period}>{entry.period.start} — {entry.period.end === 'present' ? '현재' : entry.period.end}</div>
            <p className={styles.description}>{entry.description}</p>
            {entry.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {entry.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
