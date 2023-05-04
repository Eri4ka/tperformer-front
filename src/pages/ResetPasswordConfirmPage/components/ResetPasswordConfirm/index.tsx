import { Link } from 'react-router-dom';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/BaseButton';

import styles from './styles.module.scss';

export const ResetPasswordConfirm = () => {
  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Reset successful'
        subHeadingText='Click on continue to login to your account'
        className={styles.heading}
      />
      <Link to='/'>
        <BaseButton>Continue</BaseButton>
      </Link>
    </AuthFormLayout>
  );
};
