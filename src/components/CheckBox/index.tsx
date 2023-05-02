import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  error?: string;
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const CheckBox: FC<Props> = ({ name, label, checked, handleCheck }) => {
  return (
    <div className={styles.checkbox}>
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
