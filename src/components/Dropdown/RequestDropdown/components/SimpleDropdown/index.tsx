import cl from 'classnames';
import { FC, ChangeEvent, useMemo, useState } from 'react';

import { ReactComponent as CancelIc } from '@/assets/images/text-field/cancel.svg';
import { TDropdownList } from '@/components/Dropdown/types';
import { IconLayout, IconSize } from '@/components/IconLayout';
import { useDebounce } from '@/hooks/useDebounce';
import { useToggle } from '@/hooks/useToggle';

import styles from './styles.module.scss';

type Props = {
  valueList: TDropdownList[];
  selectedValue?: TDropdownList;
  onAdd: (value: TDropdownList) => void;
  onClear: () => void;
  placeholder: string;
  activePlaceholder: string;
};

export const SimpleDropdown: FC<Props> = ({
  valueList,
  selectedValue,
  onAdd,
  onClear,
  placeholder,
  activePlaceholder,
}) => {
  const { isOpen, handleToggle, targetRef } = useToggle<HTMLInputElement>();
  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);

  const selectedValueLength = (selectedValue && (selectedValue.value.length + 5) * 10) || 0;
  const inputValueLength = (targetRef.current && (targetRef.current.value.length + 5) * 10) || 0;
  const inputLength = inputValue ? inputValueLength : selectedValueLength;

  const debouncedValue = useDebounce<string>(inputValue, 300);

  const completedValue = useMemo(() => {
    return valueList.filter((item) => {
      return item.value.toLowerCase().includes(debouncedValue.toLowerCase());
    });
  }, [debouncedValue, valueList]);

  const handleClear = () => {
    onClear();
    setInputValue('');
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const handleFocus = () => {
    setIsInputActive(true);
    handleToggle();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectValue = (value: TDropdownList) => {
    onAdd(value);
    setInputValue('');
  };

  return (
    <>
      <div className={styles.tag}>
        <input
          className={styles.tagInput}
          type='text'
          placeholder={isInputActive ? activePlaceholder : placeholder}
          value={inputValue}
          ref={targetRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={{ width: inputLength }}
        />
        <div className={styles.tagIcon}>
          <IconLayout icon={<CancelIc />} size={IconSize.xs} onClick={handleClear} interactive />
        </div>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuContent}>
            {completedValue?.map((item) => (
              <button
                key={item.id}
                className={cl(styles.menuItem, { [styles.menuItem_active]: selectedValue?.id === item.id })}
                onClick={() => handleSelectValue(item)}>
                {item.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
