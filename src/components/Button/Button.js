import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

function Button() {
  return (
    <Link to='/contact' className={styles.button}>
      Contact Us
    </Link>
  );
}

export default Button;
