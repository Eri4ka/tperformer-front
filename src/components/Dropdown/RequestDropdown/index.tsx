import { FC, useEffect, useMemo, useState } from 'react';

import { TDropdownList } from '@/components/Dropdown/types';
import { TDropdownValue } from '@/components/OutputField/types';

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

type Props = {
  position: number;
  addValues: ({ position, value }: TDropdownValue) => void;
};

export const RequestDropwdown: FC<Props> = ({ position, addValues }) => {
  const [simpleValue, setSimpleValue] = useState<TDropdownList>();
  const [multiValues, setMultiValues] = useState<TDropdownList[]>([]);

  const isNotSelectableMultiDropdown = !simpleValue;
  const pluralizeMultiValues = useMemo(() => multiValues.map((item) => item.value).join(', '), [multiValues]);

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

  useEffect(() => {
    if (isNotSelectableMultiDropdown) {
      setMultiValues([]);
    }
  }, [isNotSelectableMultiDropdown]);

  useEffect(() => {
    addValues({ position, value: pluralizeMultiValues });
  }, [addValues, multiValues, position, pluralizeMultiValues]);

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
        pluralizedValues={pluralizeMultiValues}
        placeholder={pluralizeMultiValues || 'Tap'}
        activePlaceholder='Write'
        isNotSelectable={isNotSelectableMultiDropdown}
      />
    </div>
  );
};
