import React from 'react';

import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import Footer from '../../components/Footer/Footer';
import Paginator from '../../components/Paginator/Paginator';

import styles from './feature2.module.css';

function Feature2() {
  return (
    <main className={styles.container}>
      <FeatureHeader text='Never Get Distracted Again' />
      <section className={styles.description}>
        <h1>The Latest In Sound Isolation</h1>
        <p>
          I'm baby woke 8-bit yuccie tousled enamel pin iPhone authentic
          tattooed bicycle rights tote bag, pickled bitters photo booth. Edison
          bulb DIY shoreditch microdosing, thundercats literally artisan. Vinyl
          iPhone pok pok narwhal hoodie. Slow-carb migas mlkshk succulents,
          hoodie air plant leggings green juice man braid tattooed gastropub
          blog literally keffiyeh. Echo park put a bird on it celiac
          single-origin coffee air plant. Squid swag man b
        </p>

        <p>
          Squid swag man bun slow-carb meggings, listicle next level church-key
          kinfolk la croix tilde letterpress. Kinfolk mlkshk keffiyeh polaroid
          XOXO tacos mustache poutine tousled intelligentsia. +1 single-origin
          coffee hoodie PBR&B flexitarian shaman fanny pack helvetica trust
          fund. Four dollar toast you probably haven't heard of them chillwave
          DIY tilde actually ugh enamel pin. Master cleanse ethical letterpress
          man braid. Skateboard vape jean shorts pabst pickled taxidermy
          vexillologist hoodie offal whatever banh mi sustainable scenester
          typewriter cardigan. Meggings quinoa craft beer cloud bread tumblr
          twee occupy kogi freegan lo-fi pop-up.
        </p>

        <p>
          Trust fund +1 tofu, gochujang kinfolk mumblecore echo park cred.
          Street art organic enamel pin la croix kale chips put a bird on it
          subway tile iceland occupy bushwick. DIY kombucha chicharrones bicycle
          rights waistcoat deep v poke chillwave etsy portland four dollar toast
          ramps brooklyn meh swag. Knausgaard dreamcatcher hot chicken, cronut
          selfies before they sold out man bun williamsburg.
        </p>
      </section>
      <section className={styles.description}>
        <h1>Hear It All Out From Our Engineers:</h1>
      </section>
      <article className={styles.videoContainer}>
        <iframe
          width='853'
          height='505'
          src='https://www.youtube.com/embed/TKfISssY2ro'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </article>
      <Paginator />
      <Footer />
    </main>
  );
}

export default Feature2;
