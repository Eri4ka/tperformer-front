import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { ReactComponent as AppleIc } from '@/assets/images/social/apple.svg';
import { ReactComponent as DiscordIc } from '@/assets/images/social/discord.svg';
import { ReactComponent as GoogleIc } from '@/assets/images/social/google.svg';
import { AuthFormLayout } from '@/components/AuthFormLayout';
import { BaseButton, ButtonVariant } from '@/components/BaseButton';
import { CheckBox } from '@/components/CheckBox';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';

export const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Not valid e-mail').required('Required'),
    password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
  });

  return (
    <AuthFormLayout>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>Sign in to your account</h1>
        <p className={styles.headingSub}>
          Or
          <Link to='/signup'>
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
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='email'
              name='email'
              label='Email*'
              placeholder='example@gmail.com'
              value={values.email}
              error={touched.email && errors.email ? errors.email : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <TextField
              type='password'
              name='password'
              label='Password*'
              placeholder='Create your password'
              value={values.password}
              error={touched.password && errors.password ? errors.password : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <div className={styles.forgot}>
              <CheckBox name='remember' label='Remember me' checked={values.remember} handleCheck={handleChange} />
              <Link to='/recovery'>
                <span className={styles.linkText}>Forgot your password?</span>
              </Link>
            </div>
            <BaseButton type='submit' variant={ButtonVariant.primary} className={styles.buttonWrapper}>
              Sign in
            </BaseButton>
          </form>
        )}
      </Formik>
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        Or
        <span className={styles.dividerLine} />
      </div>
      <div className={styles.buttonsBlock}>
        <BaseButton variant={ButtonVariant.flat} className={styles.buttonWrapper} icon={<GoogleIc />}>
          Continue with Google
        </BaseButton>
        <BaseButton variant={ButtonVariant.flat} className={styles.buttonWrapper} icon={<AppleIc />}>
          Continue with Apple
        </BaseButton>
        <BaseButton variant={ButtonVariant.flat} className={styles.buttonWrapper} icon={<DiscordIc />}>
          Continue with Discord
        </BaseButton>
        <Link to='/cant'>
          <span className={styles.linkText}>Сant't log in?</span>
        </Link>
      </div>
    </AuthFormLayout>
  );
};
