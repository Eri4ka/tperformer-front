import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  Icon: ReactElement;
  onClick?: () => void;
};

export const IconLayout: FC<Props> = ({ Icon, onClick }) => {
  return (
    <span className={styles.icon} onClick={onClick}>
      {Icon}
    </span>
  );
};
