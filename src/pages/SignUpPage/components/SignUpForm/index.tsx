import {Formik} from 'formik';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

import {AuthFormLayout} from '@/components/AuthFormLayout';
import {AuthHeading} from '@/components/AuthHeading';
import {BaseButton, ButtonVariant} from '@/components/Button/BaseButton';
import {CheckBox} from '@/components/Input/CheckBox';
import {TextField} from '@/components/Input/TextField';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {fetchCreateUser} from '@/store/slices/authSlice';

import styles from './styles.module.scss';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registrationErrors = useAppSelector((state) => state.authReducer.registerErrors);
  const registrationStatus = useAppSelector((state) => state.authReducer.registerStatus);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    apikey: '',
    privacy: false,
    offers: false,
  };

  const validationSchema = Yup.object({
    privacy: Yup.bool().oneOf([true]),
  });

  useEffect(() => {
    if (registrationStatus === 'success') {
      navigate('success');
    }
  }, [navigate, registrationStatus]);

  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Let’s performe'
        subHeadingText='Let us verify some information to help 
set-up your account'
        className='m-b-25'
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const requestData = {
            username: values.username,
            email: values.email,
            password1: values.password,
            password2: values.password,
          };

          dispatch(fetchCreateUser(requestData));
        }}>
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='text'
              name='username'
              label='Full name*'
              placeholder='Evgen Pelmen'
              value={values.username}
              error={registrationErrors.username ? registrationErrors.username[0] : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            <TextField
              type='email'
              name='email'
              label='Email*'
              placeholder='example@gmail.com'
              value={values.email}
              error={registrationErrors.email ? registrationErrors.email[0] : ''}
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
              error={registrationErrors.password1 ? registrationErrors.password1[0] : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
            />
            {/*<TextField*/}
            {/*  type='text'*/}
            {/*  name='apikey'*/}
            {/*  label='OpenAI API key (optional)'*/}
            {/*  placeholder='Bkduf-AGRTL-Gbarejcd'*/}
            {/*  value={values.apikey}*/}
            {/*  handleChange={handleChange}*/}
            {/*  handleBlur={handleBlur}*/}
            {/*  handleClear={setFieldValue}*/}
            {/*  icon={*/}
            {/*    <Tooltip id='apikey-tip' content='OpenAI API key (optional)'>*/}
            {/*      <IconLayout icon={<QuestIc />} />*/}
            {/*    </Tooltip>*/}
            {/*  }*/}
            {/*/>*/}
            <div className={styles.sign}>
              <CheckBox
                name='privacy'
                label={
                  <p className={styles.signText}>
                    I have read and accept <a className={styles.signLink}>the TPerformer® end User License Agreement</a>{' '}
                    and <a className={styles.signLink}>the TPerformer® Privacy Policy</a>
                  </p>
                }
                checked={values.privacy}
                error={touched.privacy && errors.privacy ? errors.privacy : ''}
                handleCheck={handleChange}
              />
              <CheckBox
                name='offers'
                label={<p className={styles.signText}>Receive news and special offers about TPerformer</p>}
                checked={values.offers}
                handleCheck={handleChange}
              />
            </div>
            <BaseButton
              type='submit'
              variant={ButtonVariant.primary}
              className={styles.buttonWrapper}
              isLoading={registrationStatus === 'loading'}>
              Continue
            </BaseButton>
            <span className={styles.signError}>
              {registrationErrors.non_field_errors ? registrationErrors.non_field_errors[0] : ''}
            </span>
          </form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};
