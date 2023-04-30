import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthLayout } from '@/components/AuthLayout';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const SignInForm = () => {
  const [email, setEmail] = useState('');

  return (
    <AuthLayout>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>Sign in to your account</h1>
        <p className={styles.headingSub}>
          Or
          <Link to='/'>
            <span className={styles.headingLink}> create a new account</span>
          </Link>
        </p>
      </div>

      <form>
        <TextField
          type='email'
          name='email'
          label='Email'
          placeholder='example@gmail.com'
          value={email}
          handleChange={setEmail}
        />
      </form>
    </AuthLayout>
  );
};
