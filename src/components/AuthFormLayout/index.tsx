import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const AuthFormLayout: FC<Props> = ({ children }) => {
  return (
    <section className={styles.authFormLayout}>
      <div className={styles.authFormLayout_wrapper}>{children}</div>
    </section>
  );
};
