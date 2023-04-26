import * as React from 'react';
import ScoreCategoryCard from '../ScoreCategoryCard';
import Button from '../Button';
import styles from './ResultsSummary.module.scss';

interface Score {
  category: 'reaction' | 'memory' | 'verbal' | 'visual';
  score: number;
  icon: string;
}

interface ResultsSummaryProps {
  scores: Score[];
}

const meanOfScores = (scores: Score[]) => {
  const total = scores.reduce(
    (accum: number, score: Score): number => accum + score.score,
    0
  );
  const mean = total / scores.length;

  return Math.floor(mean);
};

const ResultsSummary = ({ scores }: ResultsSummaryProps) => {
  return (
    <section className={styles.wrapper} data-testid="results-summary">
      <div className={styles['score-display-container']}>
        <h3 className={styles['score-display-header']}>Your Result</h3>
        <div className={styles['score-display']}>
          <p>{meanOfScores(scores)}</p>
          <p>of 100</p>
        </div>
        <div className={styles['score-description-container']}>
          <h3>Great</h3>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className={styles['score-summary-container']}>
        <h3>Summary</h3>
        <div className={styles['score-summary-cards']}>
          {scores.map((score) => (
            <ScoreCategoryCard
              key={score.category}
              category={score.category}
              score={score.score}
              icon={`/assets/icons/icon-${score.category}.svg`}
            />
          ))}
        </div>
        <Button>Continue</Button>
      </div>
    </section>
  );
};

export default ResultsSummary;
