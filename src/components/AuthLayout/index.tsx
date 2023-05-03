import { FC, ReactNode } from 'react';

import { BackButton } from '@/components/BackButton';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  shouldGoToPrevPage?: boolean;
};

export const AuthLayout: FC<Props> = ({ children, shouldGoToPrevPage = false }) => {
  return (
    <main className={styles.authLayout}>
      {shouldGoToPrevPage && <BackButton className={styles.button} />}
      {children}
    </main>
  );
};
