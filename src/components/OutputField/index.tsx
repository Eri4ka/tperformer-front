import cl from 'classnames';
import { FC, KeyboardEvent, useCallback, useMemo, useRef, useState } from 'react';

import { RequestDropwdown } from '@/components/Dropdown/RequestDropdown';

import { getDataFromDropdownsAndFields } from './helpers';
import styles from './styles.module.scss';
import { TDropdownValue, TOutputField } from './types';

type Props = {
  className?: string;
};

const initalOutputData: TOutputField[] = [{ id: 1, type: 'field' }];

export const OutputField: FC<Props> = ({ className }) => {
  const fieldRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dropdownValues, setDropdownValues] = useState<TDropdownValue[]>([]);
  const [outputData, setOutputData] = useState<TOutputField[]>(initalOutputData);

  const addDropdownAndFieldToOutputData = () => {
    setOutputData((content) => [
      ...content,
      {
        id: content.length + 1,
        type: 'dropdown',
      },
      {
        id: content.length + 2,
        type: 'field',
      },
    ]);
  };

  const addFieldToOutputData = () => {
    setOutputData((content) => [
      ...content,
      {
        id: content.length + 1,
        type: 'field',
      },
    ]);
  };

  const handleAddToData = (e: KeyboardEvent) => {
    if (e.key === '/') {
      e.preventDefault();
      addDropdownAndFieldToOutputData();
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      addFieldToOutputData();
    }
  };

  const handleAddDropdownValues = useCallback(({ position, value }: TDropdownValue) => {
    setDropdownValues((current) => {
      const copyCurrent = [...current];
      const index = copyCurrent.findIndex((item) => item.position === position);

      if (index !== -1) {
        copyCurrent[index].value = value;
        return copyCurrent;
      }

      return [...copyCurrent, { position, value }];
    });
  }, []);

  const dataFromDropdownsAndFields = useMemo(() => {
    return getDataFromDropdownsAndFields(fieldRefs, dropdownValues);
  }, [dropdownValues]);

  return (
    <div className={cl(styles.output, className)}>
      <div className={styles.outputWrapper}>
        <div className={styles.outputContent}>
          {outputData.map((item) => {
            if (item.type === 'dropdown') {
              return <RequestDropwdown key={item.id} position={item.id} addValues={handleAddDropdownValues} />;
            }

            return (
              <div
                className={styles.editable}
                contentEditable
                onKeyDown={handleAddToData}
                key={item.id}
                ref={(el) => (fieldRefs.current[item.id] = el)}
                placeholder='Type here...'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
