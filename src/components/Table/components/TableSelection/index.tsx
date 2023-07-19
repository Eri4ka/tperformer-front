import { FC } from 'react';

import { ReactComponent as CopyIc } from '@/assets/images/common/copy.svg';
import { ReactComponent as TrashIc } from '@/assets/images/common/trash.svg';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { Tag } from '@/components/Tag';

import styles from './styles.module.scss';

type Props = {
  numSelected: number;
  numTotal: number;
};

export const TableSelection: FC<Props> = ({ numSelected, numTotal }) => {
  return (
    <div className={styles.selection}>
      <p className={styles.selectionText}>
        Selected {numSelected} of {numTotal}
      </p>
      <ButtonsGroup>
        <Tag text='Copy' icon={<CopyIc />} />
        <Tag text='Delete' icon={<TrashIc />} />
      </ButtonsGroup>
    </div>
  );
};
