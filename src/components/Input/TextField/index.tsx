import cl from 'classnames';
import { FC, InputHTMLAttributes, ChangeEvent, useState, ReactElement } from 'react';

import { ReactComponent as CancelIc } from '@/assets/images/text-field/cancel.svg';
import { ReactComponent as HideIc } from '@/assets/images/text-field/hide.svg';
import { ReactComponent as ShowIc } from '@/assets/images/text-field/show.svg';
import { IconLayout } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClear: (field: Props['name'], value: Props['value']) => void;
  error?: string;
  className?: string;
  icon?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: FC<Props> = ({
  name,
  label,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  handleClear,
  error,
  className,
  icon,
}) => {
  const [togglePasswordShown, setTogglePasswordShown] = useState(false);

  const handleClearField = () => handleClear(name, '');

  const handleTogglePasswordShown = () => setTogglePasswordShown((current) => !current);

  return (
    <div className={cl(styles.textField, className)}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={cl(styles.input, { [styles.input_error]: error })}
          id={name}
          name={name}
          type={togglePasswordShown ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={styles.iconWrapper}>
          {type === 'password' && (
            <IconLayout
              icon={togglePasswordShown ? <HideIc /> : <ShowIc />}
              onClick={handleTogglePasswordShown}
              interactive
            />
          )}
          {value && <IconLayout icon={<CancelIc />} onClick={handleClearField} interactive />}
          {icon}
        </div>
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};
