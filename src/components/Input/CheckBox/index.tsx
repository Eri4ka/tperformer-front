import cl from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label?: string | ReactElement;
  error?: string;
  className?: string;
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const CheckBox: FC<Props> = ({ name, label, error, checked, className, handleCheck }) => {
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
      <label htmlFor={name} className={cl(styles.checkboxLabel, { [styles.checkboxLabel_error]: error })}>
        {label && <div className={styles.checkboxText}>{label}</div>}
      </label>
    </div>
  );
};
