import { Link } from 'react-router-dom';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/Button/BaseButton';

import styles from './styles.module.scss';

export const SignInHelpConfirm = () => {
  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Your email has been sent'
        subHeadingText='Our team will contact with you shortly'
        className={styles.heading}
      />
      <Link to='/signin'>
        <BaseButton>Go back to Login page</BaseButton>
      </Link>
    </AuthFormLayout>
  );
};
