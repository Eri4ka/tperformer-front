import { Link, useSearchParams } from 'react-router-dom';

import AppLink from '@/components/AppLink';
import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/Button/BaseButton';

import styles from './styles.module.scss';

export const ForgotPasswordConfirm = () => {
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email') || '';

  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Check you e-mail'
        subHeadingText={`We sent a password reset to your email ${email}`}
        className={styles.heading}
      />
      <Link to='/signin'>
        <BaseButton className={styles.button}>Go back to Login page</BaseButton>
      </Link>
      <div className={styles.resend}>
        <span className={styles.resendText}>Didn’t get the email?</span>
        <AppLink href='/forgot-password' text='Resend mail' replace />
      </div>
    </AuthFormLayout>
  );
};
