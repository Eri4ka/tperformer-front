import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <section className={styles.authLayout}>
      <div className={styles.authLayout_wrapper}>{children}</div>
    </section>
  );
};
