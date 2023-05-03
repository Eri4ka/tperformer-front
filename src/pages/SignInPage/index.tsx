import { ReactComponent as LogoIc } from '@/assets/images/signin/logo.svg';

import { SignInForm } from './components/SignInForm';
import styles from './styles.module.scss';

export const SignInPage = () => {
  return (
    <main className={styles.signIn}>
      <div className={styles.content}>
        <SignInForm />
      </div>
      <div className={styles.content}>
        <div className={styles.contentLogo}>
          <LogoIc />
          <span className={styles.contentText}>TPerfromer</span>
        </div>
      </div>
    </main>
  );
};
