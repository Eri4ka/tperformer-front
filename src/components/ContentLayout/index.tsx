import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return <div className={styles.contentLayout}>{children}</div>;
};
