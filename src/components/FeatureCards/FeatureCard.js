import React from 'react';

import styles from './featureCard.module.css';

function FeatureCard({ name, image, link }) {
  return (
    <section className={styles.card}>
      <h2>{name}</h2>
      <figure className={styles.imageContainer}>
        <img src={image} alt='headphone' className={styles.image} />
      </figure>
      <a href={link} className={styles.link}>
        Learn More
      </a>
    </section>
  );
}

export default FeatureCard;
