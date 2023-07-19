import cl from 'classnames';
import { FC, InputHTMLAttributes, ChangeEvent, useState, useEffect } from 'react';

import { ReactComponent as CancelIc } from '@/assets/images/text-field/cancel.svg';
import { useDebounce } from '@/hooks/useDebounce';

import styles from './styles.module.scss';
import { IconLayout } from '../IconLayout';

type Props = {
  onChange: (value: string) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const SearchField: FC<Props> = ({ className, onChange, ...props }) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const handleClear = () => setValue('');

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <div className={cl(styles.searchField, className)}>
      <input
        type='text'
        className={styles.input}
        placeholder='Search'
        value={value}
        onChange={handleChange}
        {...props}
      />
      <div className={styles.iconWrapper}>
        {value && <IconLayout icon={<CancelIc />} onClick={handleClear} interactive />}
      </div>
    </div>
  );
};
