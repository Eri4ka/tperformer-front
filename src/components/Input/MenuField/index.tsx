import cl from 'classnames';
import { FC, InputHTMLAttributes, ChangeEvent } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  value?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const MenuField: FC<Props> = ({ name, label, placeholder, value, handleChange, className, isDisabled }) => {
  return (
    <div className={cl(styles.menuField, className)}>
      <label className={cl(styles.label, { [styles.label_disabled]: isDisabled })} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </div>
  );
};
