import * as React from 'react';
import ResultsSummary from '@/components/ResultsSummary';
import styles from './styles/HomePage.module.scss';

type Category = 'reaction' | 'memory' | 'verbal' | 'visual';

interface Score {
  category: Category;
  score: number;
  icon: string;
}

const data: Score[] = [
  {
    category: 'reaction',
    score: 80,
    icon: './assets/icons/icon-reaction.svg',
  },
  {
    category: 'memory',
    score: 92,
    icon: './assets/icons/icon-memory.svg',
  },
  {
    category: 'verbal',
    score: 61,
    icon: './assets/icons/icon-verbal.svg',
  },
  {
    category: 'visual',
    score: 72,
    icon: './assets/icons/icon-visual.svg',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <ResultsSummary scores={data} />
    </main>
  );
}
