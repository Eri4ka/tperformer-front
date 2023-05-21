import { useState } from 'react';

import { ReactComponent as PlusIc } from '@/assets/images/common/plus.svg';
import { BaseButton, ButtonSize, ButtonVariant } from '@/components/Button/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { RequestField } from '@/components/Input/RequestField';
import { OutputField } from '@/components/OutputField';

import styles from './styles.module.scss';

export const RequestEnter = () => {
  const [isOutputActive, setIsOutputActive] = useState(false);

  return (
    <div className={styles.enter}>
      {isOutputActive ? (
        <OutputField className={styles.enterOutput}>
          <span>You are</span>
          <span>You are creating exercises for a learning plan for your students.</span>
        </OutputField>
      ) : (
        <RequestField name='request' placeholder='Type here ...' onFocus={() => setIsOutputActive(true)} />
      )}
      <div className={styles.enterButtons}>
        <ButtonsGroup>
          <BaseButton variant={ButtonVariant.flat} size={ButtonSize.xs} icon={<PlusIc />} />
          <BaseButton variant={ButtonVariant.flat} size={ButtonSize.s}>
            Generate First
          </BaseButton>
          <BaseButton size={ButtonSize.s}>Generate All</BaseButton>
        </ButtonsGroup>
      </div>
    </div>
  );
};
