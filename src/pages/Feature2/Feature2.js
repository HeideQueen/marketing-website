import React from 'react';

import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import Footer from '../../components/Footer/Footer';
import Paginator from '../../components/Paginator/Paginator';

import './feature2.module.css';

function Feature2() {
  return (
    <main>
      <FeatureHeader text='Never Get Distracted Again' />
      <Paginator />
      <Footer />
    </main>
  );
}

export default Feature2;
