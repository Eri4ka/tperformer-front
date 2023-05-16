import cl from 'classnames';
import { FC, ReactNode, useState } from 'react';

import { ReactComponent as SettingsIc } from '@/assets/images/common/settings.svg';
import { IconLayout } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export const SideMenu: FC<Props> = ({ title, children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => setIsOpenMenu((current) => !current);

  return (
    <div className={cl(styles.menu, { [styles.menu_open]: isOpenMenu })}>
      <button className={styles.menuButton} onClick={handleToggleMenu}>
        <IconLayout icon={<SettingsIc />} />
      </button>
      <div className={styles.menuWrapper}>
        <h2 className={styles.menuTitle}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
