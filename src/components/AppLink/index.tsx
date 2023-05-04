import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type Props = {
  href: string;
  text: string;
  replace?: boolean;
};

const AppLink: FC<Props> = ({ href, text, replace = false }) => {
  return (
    <Link to={href} replace={replace}>
      <span className={styles.linkText}>{text}</span>
    </Link>
  );
};

export default AppLink;
