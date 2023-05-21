import cl from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const OutputField: FC<Props> = ({ children, className }) => {
  return (
    <div className={cl(styles.output, className)}>
      <div className={styles.outputWrapper}>
        <div className={styles.outputContent}>{children}</div>
      </div>
    </div>
  );
};
