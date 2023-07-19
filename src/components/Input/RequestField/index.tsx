import { FC, InputHTMLAttributes, ChangeEvent } from 'react';

import styles from './styles.module.scss';

type Props = {
  name: string;
  value?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const RequestField: FC<Props> = ({ name, placeholder, value, handleChange, isDisabled, ...props }) => {
  return (
    <input
      className={styles.input}
      name={name}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={isDisabled}
      {...props}
    />
  );
};
