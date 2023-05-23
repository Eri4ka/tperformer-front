import cl from 'classnames';
import { FC, ReactNode } from 'react';

import { ReactComponent as SettingsIc } from '@/assets/images/common/settings.svg';
import { IconLayout } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onToggleMenu: () => void;
  title: string;
  children: ReactNode;
};

export const SideMenu: FC<Props> = ({ isOpen, onToggleMenu, title, children }) => {
  return (
    <div className={cl(styles.menu, { [styles.menu_open]: isOpen })}>
      <button className={styles.menuButton} onClick={onToggleMenu}>
        <IconLayout icon={<SettingsIc />} />
      </button>
      <div className={cl(styles.menuWrapper, { [styles.menuWrapper_open]: isOpen })}>
        <h2 className={styles.menuTitle}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
