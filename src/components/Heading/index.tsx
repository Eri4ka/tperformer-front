import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  text: string;
};

export const Heading: FC<Props> = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};

export default Heading;
