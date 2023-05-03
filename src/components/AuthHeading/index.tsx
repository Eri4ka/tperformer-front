import cl from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  headingText: string;
  subHeadingText: string;
  className?: string;
};

export const AuthHeading: FC<Props> = ({ headingText, subHeadingText, className }) => {
  return (
    <div className={cl(styles.heading, className)}>
      <h1 className={styles.headingText}>{headingText}</h1>
      <p className={styles.headingSub}>{subHeadingText}</p>
    </div>
  );
};
