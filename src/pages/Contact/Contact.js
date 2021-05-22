import React, { useState } from 'react';

import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';

import styles from './contact.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (type, input) => {
    if (type === 'name') {
      setName(input);
    }

    if (type === 'email') {
      setEmail(input);
    }

    if (type === 'message') {
      setMessage(input);
    }
  };

  return (
    <>
      <FeatureHeader text='Contact The Team' />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Contact Us</h1>
          <p>
            I'm baby fanny pack plaid taxidermy, microdosing artisan locavore
            hoodie roof party seitan tumblr YOLO butcher. Lumbersexual poutine
            bespoke kinfolk.
          </p>
        </header>
        <section className={styles.formContainer}>
          <form className={styles.formControl}>
            <div className={styles.infoSection}>
              <input
                type='text'
                placeholder='Name'
                required
                value={name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              <input
                type='email'
                placeholder='Email address'
                required
                value={email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Write your message here'
              required
              value={message}
              onChange={(e) => handleChange('message', e.target.value)}
            ></textarea>
            <div className={styles.terms}>
              <input type='checkbox' name='terms' id='terms' required />
              <label htmlFor='terms'>
                I accept the terms and conditions of the experience
              </label>
            </div>
          </form>
          <button
            type='submit'
            className={styles.button}
            onSubmit={(e) => e.preventDefault()}
          >
            SUBMIT
          </button>
        </section>
      </main>
    </>
  );
}

export default Contact;
