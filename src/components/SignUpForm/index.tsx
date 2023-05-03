import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as QuestIc } from '@/assets/images/text-field/question.svg';
import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton, ButtonVariant } from '@/components/BaseButton';
import { CheckBox } from '@/components/CheckBox';
import { IconLayout } from '@/components/IconLayout';
import { TextField } from '@/components/TextField';

import styles from './styles.module.scss';
import { Tooltip } from '../Tooltip';

export const SignUpForm = () => {
  const initialValues = {
    fullname: '',
    email: '',
    password: '',
    apikey: '',
    privacy: false,
    offers: false,
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().min(2, 'Min 2 symbols').required('Required'),
    email: Yup.string().email('Not valid e-mail').required('Required'),
    password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
    apikey: Yup.string().min(12, 'Min 12 symbols'),
    privacy: Yup.bool().oneOf([true]),
  });

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
          console.log(values);
        }}>
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, touched }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              type='text'
              name='fullname'
              label='Full name*'
              placeholder='Evgen Pelmen'
              value={values.fullname}
              error={touched.fullname && errors.fullname ? errors.fullname : ''}
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
            <TextField
              type='text'
              name='apikey'
              label='OpenAI API key (optional)'
              placeholder='Bkduf-AGRTL-Gbarejcd'
              value={values.apikey}
              error={touched.apikey && errors.apikey ? errors.apikey : ''}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleClear={setFieldValue}
              icon={
                <Tooltip id='apikey' content='OpenAI API key (optional)'>
                  <IconLayout icon={<QuestIc />} />
                </Tooltip>
              }
            />
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
            <BaseButton type='submit' variant={ButtonVariant.primary} className={styles.buttonWrapper}>
              Continue
            </BaseButton>
          </form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};
