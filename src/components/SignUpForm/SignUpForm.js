import React, { useState } from 'react';

import styles from './signUpForm.module.css';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (type, input) => {
    switch (type) {
      case 'firstName':
        setFirstName(input);
        return;
      case 'lastName':
        setLastName(input);
        return;
      case 'email':
        setEmail(input);
        return;
      case 'city':
        setCity(input);
        return;
      case 'number':
        setNumber(input);
        return;
      default:
        return;
    }
  };

  return (
    <section className={styles.formContainer}>
      <h2>JOIN THE EXPERIENCE</h2>
      <p>
        Become part of the most exclusive audiophile community completely free
        of charge except for your soul.
      </p>
      <form className={styles.formControl}>
        <input
          type='text'
          placeholder='First Name'
          required
          value={firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          required
          value={lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
        <input
          type='email'
          placeholder='Email address'
          required
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <input
          type='text'
          placeholder='City'
          required
          value={city}
          onChange={(e) => handleChange('city', e.target.value)}
        />
        <input
          type='text'
          placeholder='Phone Number'
          required
          value={number}
          onChange={(e) => handleChange('number', e.target.value)}
        />
        <button
          type='submit'
          className={styles.submitButton}
          onSubmit={(e) => e.preventDefault()}
        >
          BECOME A MEMBER
        </button>
      </form>
    </section>
  );
}

export default SignUpForm;
