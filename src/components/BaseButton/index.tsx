import cl from 'classnames';
import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

import { Loader, LoaderClass } from '@/components/Loader';

import styles from './styles.module.scss';

export enum ButtonClass {
  primary = 'button_primary',
  secondary = 'button_secondary',
  flat = 'button_flat',
}

type Props = {
  className: ButtonClass;
  isLoading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<Props> = ({ className, isLoading, children, ...props }) => {
  return (
    <button className={cl(styles.button, styles[className])} {...props}>
      {isLoading ? (
        <Loader className={className === ButtonClass.primary ? LoaderClass.primary : LoaderClass.secondary} />
      ) : (
        children
      )}
    </button>
  );
};
