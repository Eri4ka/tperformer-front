import { FC, ReactElement, ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import { IconLayout, IconSize } from '../IconLayout';

type Props = {
  text: string;
  icon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Tag: FC<Props> = ({ text, icon, ...props }) => {
  return (
    <button className={styles.tag} {...props}>
      {icon && <IconLayout icon={icon} size={IconSize.xxs} />}
      <span className={styles.tagText}>{text}</span>
    </button>
  );
};
