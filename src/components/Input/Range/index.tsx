import cl from 'classnames';
import { FC, useState, ChangeEvent } from 'react';
import { Range as ReactRange, getTrackBackground } from 'react-range';

import styles from './styles.module.scss';

type Props = {
  min: number;
  max: number;
  step: number;
  isDisabled?: boolean;
};

export const Range: FC<Props> = ({ min, max, step, isDisabled }) => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleChangeRangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = +event.target.value;

    if (targetValue > max) {
      setRangeValue(max);
    } else {
      setRangeValue(targetValue);
    }
  };

  return (
    <div className={cl(styles.range, { [styles.range_disabled]: isDisabled })}>
      <div className={styles.rangeInfo}>
        <label htmlFor={'name'} className={styles.rangeLabel}>
          Title
        </label>
        <input
          className={styles.rangeValue}
          value={rangeValue}
          onChange={handleChangeRangeValue}
          min={min}
          max={max}
          type='number'
        />
      </div>
      <ReactRange
        disabled={isDisabled}
        step={step}
        min={min}
        max={max}
        values={[rangeValue]}
        onChange={([values]) => setRangeValue(values)}
        renderTrack={({ props, children }) => (
          <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}>
            <div
              ref={props.ref}
              style={{
                height: '4px',
                width: '100%',
                borderRadius: '5px',
                background: getTrackBackground({
                  values: [rangeValue],
                  colors: ['#D4D4D4', '#F6F7FA'],
                  min: min,
                  max: max,
                }),
              }}>
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '10px',
              backgroundColor: '#F6F7FA',
              borderRadius: '50%',
              border: '1px solid #D4D4D4',
            }}
          />
        )}
      />
    </div>
  );
};
