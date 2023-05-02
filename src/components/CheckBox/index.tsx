import cl from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  error?: string;
  className?: string;
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const CheckBox: FC<Props> = ({ name, label, checked, className, handleCheck }) => {
  return (
    <div className={cl(styles.checkbox, className)}>
      <input
        className={styles.checkboxInput}
        name={name}
        type='checkbox'
        id={name}
        checked={checked}
        onChange={handleCheck}
      />
      <label htmlFor={name} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};
