import { Link } from 'react-router-dom';

import { AuthFormLayout } from '@/components/AuthFormLayout';
import { AuthHeading } from '@/components/AuthHeading';
import { BaseButton } from '@/components/BaseButton';

import styles from './styles.module.scss';

export const Confirm = () => {
  return (
    <AuthFormLayout>
      <AuthHeading
        headingText='Done!'
        subHeadingText='You now joined TPerformer betta team'
        className={styles.heading}
      />
      <div className={styles.content}>
        <p className={styles.contentText}>We appreciate your decision to try our product 🙏</p>
        <p className={styles.contentText}>
          Now you can try the product, fill in the API key if not yet, or
          <a className={styles.contentLink}> join our Discord server for tutorials</a>, tips from other top performers,
          and much more!
        </p>
      </div>
      <Link to='/'>
        <BaseButton>Go to Perform!</BaseButton>
      </Link>
    </AuthFormLayout>
  );
};
