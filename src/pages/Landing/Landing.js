import React from 'react';

import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import styles from './landing.module.css';

function Landing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>WELCOME TO A NEW WORLD OF SONOROUSNESS</h2>
        <h1>
          SOUND EXPERIENCE DX WILL REVOLUTIONIZE THE WAY YOU LISTEN IN MORE WAYS
          THAN ONE
        </h1>
        <Link to='/home' className={styles.link}>
          Enter The Experience
        </Link>
      </header>
      <SignUpForm />
    </div>
  );
}

export default Landing;
