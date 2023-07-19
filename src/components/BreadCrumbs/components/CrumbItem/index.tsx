import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as RArrowIC } from '@/assets/images/crumb-item/arrow-right.svg';
import { IconLayout, IconSize } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  path: string;
  text: string;
  last?: boolean;
};

export const CrumbItem: FC<Props> = ({ path, text, last = false }) => {
  return (
    <div className={styles.crumb}>
      <Link to={path}>
        <span className={styles.crumbElem}>{text}</span>
      </Link>
      {!last && <IconLayout icon={<RArrowIC />} size={IconSize.xs} />}
    </div>
  );
};
