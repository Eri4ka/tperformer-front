import cl from 'classnames';
import { FC } from 'react';

import { ReactComponent as PlusIc } from '@/assets/images/common/plus.svg';
import { ReactComponent as SettingsIc } from '@/assets/images/common/settings.svg';
import { IconLayout } from '@/components/IconLayout';

import styles from './styles.module.scss';

type Props = {
  isVisible: boolean;
};

export const RequestHelp: FC<Props> = ({ isVisible }) => {
  return (
    <div className={cl(styles.help, { [styles.help_visible]: isVisible })}>
      <span className={styles.helpText}>
        Add the snippet by clicking
        <IconLayout icon={<PlusIc />} className={styles.helpIcon} />
        or type «/» to call the Glossaries and Connections.
      </span>
      <span className={styles.helpText}>
        Use <IconLayout icon={<SettingsIc />} /> for the prompt settings.
      </span>
    </div>
  );
};
