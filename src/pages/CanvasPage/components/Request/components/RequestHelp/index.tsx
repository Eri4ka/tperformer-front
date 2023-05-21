import { ReactComponent as PlusIc } from '@/assets/images/common/plus.svg';
import { ReactComponent as SettingsIc } from '@/assets/images/common/settings.svg';
import { IconLayout } from '@/components/IconLayout';

import styles from './styles.module.scss';

export const RequestHelp = () => {
  return (
    <div className={styles.help}>
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
