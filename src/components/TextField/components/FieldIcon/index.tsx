import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  Icon: ReactElement;
  onClick: () => void;
};

export const FieldIcon: FC<Props> = ({ Icon, onClick }) => {
  return (
    <span className={styles.iconWrapper} onClick={onClick}>
      {Icon}
    </span>
  );
};
