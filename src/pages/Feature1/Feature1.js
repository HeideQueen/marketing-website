import React from 'react';

import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import Footer from '../../components/Footer/Footer';
import Paginator from '../../components/Paginator/Paginator';

import styles from './feature1.module.css';

function Feature1() {
  return (
    <>
      <FeatureHeader text='High Fidelity at all Times' />
      <main className={styles.featureContainer}>
        <section className={styles.imageFeature}>
          <figure className={styles.imageContainer}>
            <img
              src='https://images.unsplash.com/photo-1551205648-1f8a635098ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='woman with headphones'
              className={styles.image}
            />
          </figure>
          <aside className={styles.imageTextContainer}>
            <p>
              I'm baby everyday carry unicorn keytar microdosing tote bag
              messenger bag. Kinfolk bespoke whatever, pop-up farm-to-table
              squid distillery live-edge prism. Umami pour-over af pok pok
              brooklyn twee pickled
            </p>
          </aside>
        </section>
        <section className={styles.listContainer}>
          <h1>What You Get:</h1>
          <ul>
            <li>I'm baby live-edge adaptogen heirloom vaporware cardigan.</li>
            <li>
              Narwhal hexagon sriracha next level affogato paleo fam hell of
              venmo semiotics glossier meh ethical VHS meggings.
            </li>
            <li>Sriracha schlitz shaman unicorn helvetica.</li>
            <li>
              Shoreditch mlkshk marfa prism vaporware vinyl chambray health
              goth.{' '}
            </li>
            <li>
              Selfies hammock DIY bicycle rights, occupy four loko truffaut.
            </li>
            <li>
              Cardigan hella butcher food truck tumblr, tumeric green juice.
            </li>
            <li>
              Hoodie offal venmo actually austin, meh fam leggings raclette cray
              heirloom.
            </li>
            <li>Kale chips snackwave pug fashion axe edison bulb.</li>
            <li>Farm-to-table narwhal chambray tacos synth affogato.</li>
          </ul>
        </section>
        <Paginator />
        <Footer />
      </main>
    </>
  );
}

export default Feature1;
