import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const ButtonsGroup: FC<Props> = ({ children }) => {
  return <div className={styles.group}>{children}</div>;
};
