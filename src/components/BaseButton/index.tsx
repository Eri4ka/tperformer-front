import cl from 'classnames';
import { FC, ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

import { ReactComponent as PlusIc } from '@/assets/images/button/plus.svg';
import { IconLayout } from '@/components/IconLayout';
import { Loader, LoaderVariant } from '@/components/Loader';

import styles from './styles.module.scss';

export enum ButtonVariant {
  primary = 'button_primary',
  secondary = 'button_secondary',
  flat = 'button_flat',
}

type Props = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  /**
   * отображается иконка "Плюса"
   */
  additional?: boolean;
  icon?: ReactElement;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<Props> = ({
  className,
  variant = ButtonVariant.primary,
  additional,
  isLoading,
  children,
  icon,
  ...props
}) => {
  const resultIcon = additional ? <PlusIc /> : icon;
  const loaderClass = variant === ButtonVariant.primary ? LoaderVariant.primary : LoaderVariant.secondary;

  return (
    <button className={cl(styles.button, styles[variant], className)} {...props}>
      {isLoading ? (
        <Loader variant={loaderClass} />
      ) : (
        <>
          {resultIcon && <IconLayout icon={resultIcon} />}
          {children}
        </>
      )}
    </button>
  );
};
