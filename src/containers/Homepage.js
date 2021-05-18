import React from 'react';
import FeatureCards from '../components/FeatureCards/FeatureCards';
import Button from '../components/Button/Button';

import cardData from '../data/cardData';

import styles from './homepage.module.css';

function Homepage() {
  return (
    <main className={styles.homepage}>
      <header className={styles.title}>
        <h1>Sound Experience DX</h1>
      </header>
      <article className={styles.description}>
        <p>
          I'm baby banh mi DIY XOXO vice intelligentsia pitchfork try-hard
          dreamcatcher. Viral raclette offal truffaut kickstarter. Ennui
          authentic four loko af hammock. Pinterest meh tumeric deep v ethical
          waistcoat. Pabst succulents seitan subway tile woke, franzen slow-carb
          celiac four dollar toast fanny pack authentic distillery next level
          pitchfork.
        </p>
      </article>
      <FeatureCards data={cardData} />
      <footer className={styles.footer}>
        <p>
          I'm baby fanny pack brunch umami migas flexitarian pok pok 8-bit,
          bushwick echo park retro pug. Tumblr hell of cloud bread 3 wolf moon,
          sriracha taiyaki post-ironic banh mi neutra. Flexitarian craft beer
          edison bulb fashion axe prism. Cliche everyday carry green juice
          venmo, palo santo poutine wayfarers godard williamsburg ramps kinfolk.
        </p>
        <Button />
      </footer>
    </main>
  );
}

export default Homepage;
