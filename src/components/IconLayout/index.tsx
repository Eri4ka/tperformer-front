import cl from 'classnames';
import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

export enum IconSize {
  xxs = 'icon_xxs',
  s = 'icon_s',
  m = 'icon_m',
  l = 'icon_l',
}

type Props = {
  icon: ReactElement;
  size?: IconSize;
  onClick?: () => void;
  className?: string;
  interactive?: boolean;
};

export const IconLayout: FC<Props> = ({ icon, size = IconSize.s, onClick, className, interactive }) => {
  return (
    <span className={cl(styles.icon, styles[size], { [styles.icon_inter]: interactive }, className)} onClick={onClick}>
      {icon}
    </span>
  );
};
