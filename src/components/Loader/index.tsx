import cl from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export enum LoaderClass {
  primary = 'loader_primary',
  secondary = 'loader_secondary',
}

type Props = {
  className: LoaderClass;
};

export const Loader: FC<Props> = ({ className }) => {
  return <span className={cl(styles.loader, styles[className])} />;
};
