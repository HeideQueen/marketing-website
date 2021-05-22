import React from 'react';
import { Link } from 'react-router-dom';

import styles from './featureHeader.module.css';

function FeatureHeader({ text }) {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/home' className={styles.link}>
          Sound Experience DX
        </Link>{' '}
        {'>'} {text}
      </h1>
    </header>
  );
}

export default FeatureHeader;
