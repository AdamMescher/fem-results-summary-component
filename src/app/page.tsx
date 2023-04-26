import * as React from 'react';
import ResultsSummary from '@/components/ResultsSummary';
import styles from './styles/HomePage.module.scss';

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <ResultsSummary scores={data} />
    </main>
  );
}
