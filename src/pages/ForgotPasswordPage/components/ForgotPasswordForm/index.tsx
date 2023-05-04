import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/BaseButton';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Not valid e-mail').required('Required'),
  });

  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Forgot password'
        subHeadingText='Enter your email for a password 
  reset link'
        className={styles.heading}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({ email }) => {
          navigate(`confirm?email=${email}`, { replace: true });
        }}>
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='email'
              name='email'
              label='Email'
              placeholder='example@gmail.com'
              value={values.email}
              error={touched.email && errors.email ? errors.email : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <BaseButton type='submit' className={styles.button}>
              Get a recovery link
            </BaseButton>
          </form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};
