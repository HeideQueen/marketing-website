import React from 'react';

import FeatureCards from '../../components/FeatureCards/FeatureCards';
import Footer from '../../components/Footer/Footer';

import cardData from '../../data/cardData';

import styles from './homepage.module.css';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <header className={styles.title}>
        <h1>Sound Experience DX</h1>
      </header>
      <article className={styles.description}>
        <p>
          I'm baby etsy lyft salvia selvage plaid helvetica pug squid green
          juice. Authentic typewriter salvia fam, hexagon wayfarers distillery
          shabby chic literally activated charcoal gentrify mustache. Four loko
          iPhone gochujang put a bird on it pork belly butcher vape meggings
          messenger bag. 3 wolf moon tumblr flannel beard palo santo, cred
          subway tile glossier prism polaroid. Tbh mixtape enamel pin, actually
          swag iceland pop-up distillery.
        </p>
      </article>
      <FeatureCards data={cardData} />
      <Footer />
    </main>
  );
}

export default Homepage;
