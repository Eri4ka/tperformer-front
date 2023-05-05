import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { IconLayout, IconSize } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  href: string;
  icon: ReactElement;
  text: string;
};

export const Section: FC<Props> = ({ href, icon, text }) => {
  return (
    <Link to={href} className={styles.section}>
      <IconLayout icon={icon} size={IconSize.m} />
      <span className={styles.sectionText}>{text}</span>
    </Link>
  );
};
