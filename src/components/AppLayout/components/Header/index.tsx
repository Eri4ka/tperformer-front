import { Link } from 'react-router-dom';

import { ReactComponent as HelpIc } from '@/assets/images/common/help.svg';
import { ReactComponent as BurgerIc } from '@/assets/images/header/burger.svg';
import { ReactComponent as LogoIc } from '@/assets/images/signin/logo.svg';
import { IconLayout, IconSize } from '@/components/IconLayout';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.left}>
          <IconLayout icon={<BurgerIc />} size={IconSize.m} />
          <Link to='/'>
            <IconLayout icon={<LogoIc />} size={IconSize.l} />
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.help}>
            <IconLayout icon={<HelpIc />} />
            <span className={styles.helpText}>Help</span>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileIcon}>
              <span className={styles.profileName}>A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
