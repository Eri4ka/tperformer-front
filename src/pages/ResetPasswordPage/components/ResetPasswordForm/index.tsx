import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/BaseButton';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    password: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
  });

  return (
    <AuthFormLayout>
      <AuthHeading headingText='Password reset' subHeadingText='Set a new password' className={styles.heading} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate('success');
        }}>
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='password'
              name='password'
              label='Password*'
              placeholder='New password'
              value={values.password}
              error={touched.password && errors.password ? errors.password : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <BaseButton type='submit' className={styles.button}>
              Reset password
            </BaseButton>
          </form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};
