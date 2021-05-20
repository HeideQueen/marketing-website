import React from 'react';
import { Link } from 'react-router-dom';

import styles from './featureCard.module.css';

function FeatureCard({ name, image, link }) {
  return (
    <section className={styles.card}>
      <h2>{name}</h2>
      <figure className={styles.imageContainer}>
        <img src={image} alt='headphone' className={styles.image} />
      </figure>
      <Link to={link} className={styles.link}>
        Learn More
      </Link>
    </section>
  );
}

export default FeatureCard;
