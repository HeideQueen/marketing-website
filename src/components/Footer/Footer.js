import React from 'react';

import Button from '../Button/Button';

import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        I'm baby fanny pack brunch umami migas flexitarian pok pok 8-bit,
        bushwick echo park retro pug. Tumblr hell of cloud bread 3 wolf moon,
        sriracha taiyaki post-ironic banh mi neutra. Flexitarian craft beer
        edison bulb fashion axe prism. Cliche everyday carry green juice venmo,
        palo santo poutine wayfarers godard williamsburg ramps kinfolk.
      </p>
      <Button />
    </footer>
  );
}

export default Footer;
