import { ReactComponent as PlusIc } from '@/assets/images/common/plus.svg';
import { BaseButton, ButtonSize, ButtonVariant } from '@/components/Button/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { RequestField } from '@/components/Input/RequestField';

import styles from './styles.module.scss';

export const RequestEnter = () => {
  return (
    <div className={styles.enter}>
      <RequestField name='request' placeholder='Type here ...' />
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
