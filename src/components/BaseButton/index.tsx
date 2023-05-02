import cl from 'classnames';
import { FC, ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

import { Loader, LoaderClass } from '@/components/Loader';

import styles from './styles.module.scss';
import { IconLayout } from '../IconLayout';

export enum ButtonClass {
  primary = 'button_primary',
  secondary = 'button_secondary',
  flat = 'button_flat',
}

type Props = {
  className: ButtonClass;
  isLoading?: boolean;
  children: ReactNode;
  Icon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<Props> = ({ className, isLoading, children, Icon, ...props }) => {
  return (
    <button className={cl(styles.button, styles[className])} {...props}>
      {isLoading ? (
        <Loader className={className === ButtonClass.primary ? LoaderClass.primary : LoaderClass.secondary} />
      ) : (
        <>
          {Icon && <IconLayout Icon={Icon} />}
          {children}
        </>
      )}
    </button>
  );
};
