import cl from 'classnames';
import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

export enum IconSize {
  s = 'icon_s',
  m = 'icon_m',
  l = 'icon_l',
}

type Props = {
  icon: ReactElement;
  size?: IconSize;
  onClick?: () => void;
  className?: string;
};

export const IconLayout: FC<Props> = ({ icon, size = IconSize.s, onClick, className }) => {
  return (
    <span className={cl(styles.icon, styles[size], className)} onClick={onClick}>
      {icon}
    </span>
  );
};
