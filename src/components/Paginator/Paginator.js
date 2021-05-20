import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './paginator.module.css';

function Paginator() {
  const location = useLocation();
  const pageNumber = Number(location.pathname.match(/(\d+)/)[0]);

  return (
    <section className={styles.container}>
      {pageNumber !== 1 ? (
        <Link to={`/feature${pageNumber - 1}`} className={styles.link}>
          {'<'} Previous Feature
        </Link>
      ) : (
        <p></p>
      )}
      {pageNumber !== 3 ? (
        <Link to={`/feature${pageNumber + 1}`} className={styles.link}>
          Next Feature {'>'}
        </Link>
      ) : null}
    </section>
  );
}

export default Paginator;
