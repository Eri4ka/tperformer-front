import cl from 'classnames';
import {FC, ReactNode, ReactElement, ButtonHTMLAttributes} from 'react';

import {ReactComponent as PlusIc} from '@/assets/images/button/plus.svg';
import {IconLayout} from '@/components/IconLayout';
import {Loader, LoaderVariant} from '@/components/Loader';
import {Tooltip} from "@/components/Tooltip";

import styles from './styles.module.scss';

export enum ButtonVariant {
    primary = 'button_primary',
    secondary = 'button_secondary',
    flat = 'button_flat',
    icon = 'button_icon'
}

export enum ButtonSize {
    xs = 'button_xs',
    s = 'button_s',
    m = 'button_m',
}

type Props = {
    children?: ReactNode;
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    tooltip?: string
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
                                          size = ButtonSize.m,
                                          additional,
                                          isLoading,
                                          children,
                                          icon,
                                          tooltip = '',
                                          ...props
                                      }) => {
    const resultIcon = additional ? <PlusIc/> : icon;
    const loaderClass = variant === ButtonVariant.primary ? LoaderVariant.primary : LoaderVariant.secondary;

    return (<>
            {tooltip
                ? <Tooltip id={tooltip.split(' ').join('')} content={tooltip}>
                    <button className={cl(styles.button, styles[variant], styles[size], className)} {...props}
                            disabled={isLoading}>
                        {isLoading ? (
                            <Loader variant={loaderClass}/>
                        ) : (
                            <>
                                {resultIcon && <IconLayout icon={resultIcon}/>}
                                {children}
                            </>
                        )}
                    </button>
                </Tooltip>
                : <button className={cl(styles.button, styles[variant], styles[size], className)} {...props}
                          disabled={isLoading}>
                    {isLoading ? (
                        <Loader variant={loaderClass}/>
                    ) : (
                        <>
                            {resultIcon && <IconLayout icon={resultIcon}/>}
                            {children}
                        </>
                    )}
                </button>
            }
        </>
    );
};
