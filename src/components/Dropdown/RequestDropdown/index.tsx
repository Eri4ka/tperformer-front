import { useState } from 'react';

import { TDropdownList } from '@/components/Dropdown/types';

import { MultiDropdown } from './components/MultiDropdown';
import { SimpleDropdown } from './components/SimpleDropdown';
import styles from './styles.module.scss';

const valueList = [
  { id: 1, value: 'Complete' },
  { id: 2, value: 'Chat' },
  { id: 3, value: 'Insert' },
  { id: 4, value: 'Edit' },
  { id: 5, value: 'Click' },
  { id: 6, value: 'Clack' },
  { id: 7, value: 'Slack' },
  { id: 8, value: 'FewssssFewssssFewssssFewssssFewssssFewssssFewssssFewssssFewssssFewssssFewssss' },
  { id: 9, value: 'Some' },
];

export const RequestDropwdown = () => {
  const [simpleValue, setSimpleValue] = useState<TDropdownList>();
  const [multiValues, setMultiValues] = useState<TDropdownList[]>([]);

  const onSetSimpleValue = (value: TDropdownList) => setSimpleValue(value);

  const onClearSimpleValue = () => setSimpleValue(undefined);

  const onSetMultiValues = (value: TDropdownList) => {
    setMultiValues((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  const onSetAllValues = () => setMultiValues(valueList);

  const onClearMultiValues = () => setMultiValues([]);

  const pluralizeMultiValues = () => multiValues.map((item) => item.value).join(', ');

  return (
    <div className={styles.dropdown}>
      <SimpleDropdown
        valueList={valueList}
        onAdd={onSetSimpleValue}
        onClear={onClearSimpleValue}
        selectedValue={simpleValue}
        placeholder={simpleValue?.value || 'Tap'}
        activePlaceholder='Write'
      />
      <span>/</span>
      <MultiDropdown
        valueList={valueList}
        onAdd={onSetMultiValues}
        onAddAll={onSetAllValues}
        onClear={onClearMultiValues}
        selectedValues={multiValues}
        pluralizedValues={pluralizeMultiValues()}
        placeholder={pluralizeMultiValues() || 'Tap'}
        activePlaceholder='Write'
      />
    </div>
  );
};
