import cl from 'classnames';
import { FC, useState } from 'react';

import { useToggle } from '@/hooks/useToggle';

import styles from './styles.module.scss';
import { TDropdownList } from '../types';

type Props = {
  label?: string;
  valueList: TDropdownList[];
  className?: string;
};

export const MenuDropdown: FC<Props> = ({ label, valueList, className }) => {
  const { isOpen, handleToggle, targetRef } = useToggle<HTMLButtonElement>();
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectValue = (value: TDropdownList['value']) => {
    setSelectedValue((current) => (current === value ? '' : value));
  };

  return (
    <div className={cl(styles.dropdown, className)}>
      {label && <div className={styles.dropdownLabel}>{label}</div>}
      <button className={styles.dropdownField} onClick={handleToggle} ref={targetRef}>
        {selectedValue}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {valueList?.map((item) => (
            <li
              key={item.id}
              className={cl(styles.menuItem, { [styles.menuItem_active]: selectedValue === item.value })}
              onClick={() => handleSelectValue(item.value)}
              tabIndex={0}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
