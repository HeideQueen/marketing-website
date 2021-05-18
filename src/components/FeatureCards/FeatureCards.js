import React from 'react';

import FeatureCard from './FeatureCard';

import styles from './featureCards.module.css';

function FeatureCards({ data }) {
  return (
    <section className={styles.cardContainer}>
      {data.map((card) => {
        return <FeatureCard key={card.id} {...card} />;
      })}
    </section>
  );
}

export default FeatureCards;
