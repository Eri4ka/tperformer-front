import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { AuthLayout } from '@/components/AuthLayout';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Not valid e-mail').required('Required'),
    password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
  });

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='email'
              name='email'
              label='Email'
              placeholder='example@gmail.com'
              value={values.email}
              error={errors.email}
              handleChange={handleChange}
              handleClear={setFieldValue}
            />
            <TextField
              type='password'
              name='password'
              label='Password*'
              placeholder='Create your password'
              value={values.password}
              error={errors.password}
              handleChange={handleChange}
              handleClear={setFieldValue}
            />
            <button type='submit'>Sub</button>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
