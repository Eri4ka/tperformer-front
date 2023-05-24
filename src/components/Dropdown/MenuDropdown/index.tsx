import cl from 'classnames';
import { FC, useState, forwardRef, ForwardedRef, useImperativeHandle } from 'react';

import { useToggle } from '@/hooks/useToggle';

import styles from './styles.module.scss';
import { TDropdownList } from '../types';

type Props = {
  label?: string;
  valueList: TDropdownList[];
  className?: string;
  ref: ForwardedRef<HTMLButtonElement>;
};

export const MenuDropdown: FC<Props> = forwardRef(({ label, valueList, className }, ref) => {
  const { isOpen, handleToggle, targetRef } = useToggle<HTMLButtonElement>();
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectValue = (value: TDropdownList['value']) => {
    setSelectedValue((current) => (current === value ? '' : value));
  };

  useImperativeHandle(ref, () => targetRef.current);

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
});
