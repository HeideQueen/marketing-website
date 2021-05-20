import React from 'react';

import { Link } from 'react-router-dom';

import styles from './landing.module.css';

function Landing() {
  return (
    <div className={styles.container}>
      <h1>Currently Under Construction</h1>
      <h2>
        Go to: <Link to='/home'>Home</Link>{' '}
      </h2>
    </div>
  );
}

export default Landing;
