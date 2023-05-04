import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/BaseButton';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const SignInHelpForm = () => {
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
        headingText='Can’t log in?'
        subHeadingText='Write us an email and we will 
        contact you'
        className={styles.heading}
      />
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
              Heeeeelp
            </BaseButton>
          </form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};
