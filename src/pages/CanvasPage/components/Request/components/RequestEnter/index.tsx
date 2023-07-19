import { FC } from 'react';

import { ReactComponent as PlusIc } from '@/assets/images/common/plus.svg';
import { BaseButton, ButtonSize, ButtonVariant } from '@/components/Button/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { RequestField } from '@/components/Input/RequestField';
import { OutputField } from '@/components/OutputField';

import styles from './styles.module.scss';

type Props = {
  isRequestEnterOpen: boolean;
  onOpenRequestEnter: () => void;
};

export const RequestEnter: FC<Props> = ({ isRequestEnterOpen, onOpenRequestEnter }) => {
  return (
    <div className={styles.enter}>
      {isRequestEnterOpen ? (
        <OutputField className={styles.enterOutput} />
      ) : (
        <RequestField name='request' placeholder='Type here ...' onFocus={onOpenRequestEnter} />
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
