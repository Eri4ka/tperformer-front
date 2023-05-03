import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type Props = {
  href: string;
  text: string;
};

const AppLink: FC<Props> = ({ href, text }) => {
  return (
    <Link to={href}>
      <span className={styles.linkText}>{text}</span>
    </Link>
  );
};

export default AppLink;
