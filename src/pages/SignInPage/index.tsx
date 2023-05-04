import { ReactComponent as LogoIc } from '@/assets/images/signin/logo.svg';

import { SignInForm } from './components/SignInForm';
import styles from './styles.module.scss';

export const SignInPage = () => {
  return (
    <main className={styles.signIn}>
      <div className={styles.content}>
        <SignInForm />
      </div>
      <div className={styles.aside}>
        <div className={styles.asideLogo}>
          <LogoIc />
          <span className={styles.asideText}>TPerfromer</span>
        </div>
      </div>
    </main>
  );
};
