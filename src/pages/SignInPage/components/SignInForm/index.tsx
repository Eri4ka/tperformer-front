import { Formik } from 'formik';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as AppleIc } from '@/assets/images/social/apple.svg';
import { ReactComponent as DiscordIc } from '@/assets/images/social/discord.svg';
import { ReactComponent as GoogleIc } from '@/assets/images/social/google.svg';
import AppLink from '@/components/AppLink';
import { AuthFormLayout } from '@/components/AuthFormLayout';
import { BaseButton, ButtonVariant } from '@/components/Button/BaseButton';
import { CheckBox } from '@/components/Input/CheckBox';
import { TextField } from '@/components/Input/TextField';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchLoginUser, fetchUser } from '@/store/slices/authSlice';

import styles from './styles.module.scss';

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginErrors = useAppSelector((state) => state.authReducer.loginErrors);
  const loginStatus = useAppSelector((state) => state.authReducer.loginStatus);

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  useEffect(() => {
    dispatch(fetchUser(''));
  }, [dispatch]);

  useEffect(() => {
    if (loginStatus === 'success') {
      navigate('/');
    }
  }, [loginStatus, navigate]);

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
        onSubmit={(values) => {
          const requestData = {
            email: values.email,
            password: values.password,
          };

          dispatch(fetchLoginUser(requestData));
        }}>
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='email'
              name='email'
              label='Email*'
              placeholder='example@gmail.com'
              value={values.email}
              error={loginErrors.email ? loginErrors.email[0] : ''}
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
              error={loginErrors.password ? loginErrors.password[0] : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <div className={styles.forgot}>
              <CheckBox name='remember' label='Remember me' checked={values.remember} handleCheck={handleChange} />
              <AppLink text='Forgot your password?' href='/forgot-password' />
            </div>
            <BaseButton
              type='submit'
              variant={ButtonVariant.primary}
              className={styles.buttonWrapper}
              isLoading={loginStatus === 'loading'}>
              Sign in
            </BaseButton>
            <span className={styles.error}>{loginErrors.non_field_errors ? loginErrors.non_field_errors[0] : ''}</span>
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
        <AppLink text="Сant't log in?" href='help' />
      </div>
    </AuthFormLayout>
  );
};
