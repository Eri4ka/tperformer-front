import cl from 'classnames';
import { FC, KeyboardEvent, ReactNode, useMemo, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { MenuDropdown } from '../Dropdown/MenuDropdown';

type Props = {
  children?: ReactNode;
  className?: string;
};

const drop1 = [
  { id: 1, value: 'Complete' },
  { id: 2, value: 'Chat' },
  { id: 3, value: 'Insert' },
  { id: 4, value: 'Edit' },
];

export const OutputField: FC<Props> = ({ children, className }) => {
  const dropRef = useRef<HTMLButtonElement[]>([]);

  const handleCallSymbol = (e: KeyboardEvent) => {
    if (e.key === '/') {
      setContentValue((current) => [
        ...current,
        <MenuDropdown ref={el => dropRef.current[current.length + 1]} valueList={drop1} key={current.length + 1} className={styles.drop} />,
        <div className={styles.editable} contentEditable onKeyDown={handleCallSymbol} key={current.length + 2} />,
      ]);
      dropRef.current?.focus();

    }
  };
  console.log(dropRef.current.[1]);

  const [contentValue, setContentValue] = useState<ReactNode[]>([
    <div className={styles.editable} contentEditable onKeyDown={handleCallSymbol} key={1} />,
  ]);


  return (
    <div className={cl(styles.output, className)}>
      <div className={styles.outputWrapper}>
        <div className={styles.outputContent}>{contentValue}</div>
      </div>
    </div>
  );
};
