import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HelpIc } from '@/assets/images/common/help.svg';
import { ReactComponent as BurgerIc } from '@/assets/images/header/burger.svg';
import { ReactComponent as LogoIc } from '@/assets/images/signin/logo.svg';
import { IconLayout, IconSize } from '@/components/IconLayout';
import { useAppDispatch } from '@/store/hooks';
import { fetchLogoutUser } from '@/store/slices/authSlice';

import styles from './styles.module.scss';

type Props = {
  onBurger: () => void;
};

export const Header: FC<Props> = ({ onBurger }) => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.left}>
          <IconLayout icon={<BurgerIc />} size={IconSize.m} onClick={onBurger} interactive />
          <Link to='/'>
            <IconLayout icon={<LogoIc />} size={IconSize.l} />
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.help}>
            <IconLayout icon={<HelpIc />} />
            <span className={styles.helpText}>Help</span>
          </div>
          <div className={styles.profile} onClick={() => dispatch(fetchLogoutUser({}))}>
            <div className={styles.profileIcon}>
              <span className={styles.profileName}>A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
