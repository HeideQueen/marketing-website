import React from 'react';

import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import Footer from '../../components/Footer/Footer';
import Paginator from '../../components/Paginator/Paginator';

import styles from './feature3.module.css';

function Feature3() {
  return (
    <>
      <FeatureHeader text='Your Color, Your Way' />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Be Amazed At Our Color Selection:</h1>
        </header>
        <section className={styles.galleryContainer}>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1617203442202-5a1219d37247?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              alt='white headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1583360173899-b3124bc238d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              alt='red headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='gray headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='black headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1557231040-038eb8e8cdf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80'
              alt='aqua headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1614179818750-1b4dfe94389d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
              alt='rose heaphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1608280204715-ae169d5a932e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxoZWFkcGhvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='green headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1573495627094-cbfef909a47b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='yellow headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1608280200244-fae9946df695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='blue headphones'
            />
          </figure>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1509098681029-b45e9c845022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='silver headphones'
            />
          </figure>
        </section>
        <Paginator />
        <Footer />
      </main>
    </>
  );
}

export default Feature3;
