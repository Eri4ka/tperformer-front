import LogoIc from '@/assets/images/signin/logo.svg';
import { SignInForm } from '@/components/SignInForm';

import styles from './styles.module.scss';

export const SignInPage = () => {
  return (
    <main className={styles.signIn}>
      <div className={styles.content}>
        <SignInForm />
      </div>
      <div className={styles.aside}>
        <div className={styles.aside_logo}>
          <img src={LogoIc} alt='tperformer' />
          <span className={styles.aside_text}>TPerfromer</span>
        </div>
      </div>
    </main>
  );
};
