import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  icon: ReactElement;
  onClick?: () => void;
};

export const IconLayout: FC<Props> = ({ icon, onClick }) => {
  return (
    <span className={styles.icon} onClick={onClick}>
      {icon}
    </span>
  );
};
