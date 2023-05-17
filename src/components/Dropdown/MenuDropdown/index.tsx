import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { TDropdownList } from '../types';

type Props = {
  valueList: TDropdownList[];
};

export const MenuDropdown: FC<Props> = ({ valueList }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSelectValue = (value: TDropdownList['value']) => {
    setSelectedValue((current) => (current === value ? '' : value));
  };

  const handleToggleMenu = () => setIsOpenMenu((current) => !current);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!targetRef.current?.contains(event.target as HTMLDivElement)) {
        setIsOpenMenu(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownLabel}>Mode</div>
      <button className={styles.dropdownField} onClick={handleToggleMenu} ref={targetRef}>
        {selectedValue}
      </button>
      {isOpenMenu && (
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
