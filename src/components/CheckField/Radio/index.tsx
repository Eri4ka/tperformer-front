import cl from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio: FC<Props> = ({ name, label, className }) => {
  return (
    <div className={cl(styles.checkbox, className)}>
      <input className={styles.checkboxRadio} name={name} type='radio' id={name} />
      <label htmlFor={name} className={styles.checkboxLabel}>
        {label && <div className={styles.checkboxText}>{label}</div>}
      </label>
    </div>
  );
};
