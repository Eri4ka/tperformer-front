import cl from 'classnames';
import { FC, ChangeEvent } from 'react';

import { ReactComponent as CancelIc } from '@/assets/images/text-field/cancel.svg';

import styles from './styles.module.scss';
import { IconLayout } from '../IconLayout';

type Props = {
  value: string;
  handleChange: (value: string) => void;
  handleClear: () => void;
  className?: string;
};

export const SearchField: FC<Props> = ({ value, className, handleChange, handleClear }) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => handleChange(event.target.value);

  return (
    <div className={cl(styles.searchField, className)}>
      <input type='text' className={styles.input} placeholder='Search' value={value} onChange={handleChangeValue} />
      <div className={styles.iconWrapper}>
        {value && <IconLayout icon={<CancelIc />} onClick={handleClear} interactive />}
      </div>
    </div>
  );
};
