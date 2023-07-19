import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  text: string;
  children?: ReactNode;
};

export const Heading: FC<Props> = ({ text, children }) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.headingText}>{text}</h1>
      {children}
    </div>
  );
};
