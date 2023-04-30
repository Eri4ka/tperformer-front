import { FC, InputHTMLAttributes, ChangeEvent } from 'react';

import { ReactComponent as CancelIc } from '@/assets/images/text-field/cancel.svg';

import { FieldIcon } from './components/FieldIcon';
import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  value: string;
  handleChange: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: FC<Props> = ({ name, type, label, value, placeholder, handleChange }) => {
  const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  const handleClearField = () => handleChange('');

  return (
    <div className={styles.textField}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeField}
        />
        {value.length > 0 && <FieldIcon Icon={<CancelIc />} onClick={handleClearField} />}
      </div>
    </div>
  );
};
