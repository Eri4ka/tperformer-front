import cl from 'classnames';
import { FC, KeyboardEvent, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { MenuDropdown } from '../Dropdown/MenuDropdown';

type Props = {
  className?: string;
};

const drop1 = [
  { id: 1, value: 'Complete' },
  { id: 2, value: 'Chat' },
  { id: 3, value: 'Insert' },
  { id: 4, value: 'Edit' },
];

type TContentValue = { id: number; type: 'div' | 'dropdown' };

const initalValue: TContentValue[] = [{ id: 1, type: 'div' }];

export const OutputField: FC<Props> = ({ className }) => {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [contentValue, setContentValue] = useState<TContentValue[]>(initalValue);

  const handleAddElements = (e: KeyboardEvent) => {
    if (e.key === '/') {
      addFewElements();
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      addDivElement();
    }
  };

  const addFewElements = () => {
    setContentValue((content) => [
      ...content,
      {
        id: content.length + 1,
        type: 'dropdown',
      },
      {
        id: content.length + 2,
        type: 'div',
      },
    ]);
  };

  const addDivElement = () => {
    setContentValue((content) => [
      ...content,
      {
        id: content.length + 1,
        type: 'div',
      },
    ]);
  };

  return (
    <div className={cl(styles.output, className)}>
      <div className={styles.outputWrapper}>
        <div className={styles.outputContent}>
          {contentValue.map((item) => {
            if (item.type === 'dropdown') {
              return <MenuDropdown valueList={drop1} key={item.id} className={styles.drop} />;
            }

            return (
              <div
                className={styles.editable}
                contentEditable
                onKeyDown={handleAddElements}
                key={item.id}
                ref={(el) => (divRefs.current[item.id] = el)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
