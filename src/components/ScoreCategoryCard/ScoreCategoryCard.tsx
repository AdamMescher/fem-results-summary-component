import * as React from 'react';
import Image from 'next/image';
import styles from './ScoreCategoryCard.module.scss';

interface ScoreCategoryCard {
  category: 'reaction' | 'memory' | 'verbal' | 'visual';
  score: number;
}

const ScoreCategoryCard = ({ category, score }: ScoreCategoryCard) => {
  const iconHeight = 20;
  const iconWidth = 20;

  return (
    <div className={`${styles.wrapper} ${styles[category]}`}>
      <div className={styles.category}>
        <Image
          src={`/assets/icons/icon-${category}.svg`}
          height={iconHeight}
          width={iconWidth}
        />
        <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
      </div>
      <p className={styles.result}>
        {score}
        <span>/ 100</span>
      </p>
    </div>
  );
};

export default ScoreCategoryCard;
