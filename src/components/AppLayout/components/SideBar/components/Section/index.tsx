import {FC, ReactElement} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {IconLayout, IconSize} from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  href: string;
  icon: ReactElement;
  text: string;
};

export const Section: FC<Props> = ({ href, icon, text }) => {

    const location = useLocation();
    const activeLink=location.pathname===href?styles.section + " " +styles.sectionActive:styles.section
  return (
    <Link to={href} className={activeLink}>
      <IconLayout icon={icon} size={IconSize.m} className={styles.sectionIcon} />
      <span className={styles.sectionText}>{text}</span>
    </Link>
  );
};
