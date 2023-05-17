import { Radio } from '@/components/CheckField/Radio';
import { MenuDropdown } from '@/components/Dropdown/MenuDropdown';
import { MenuField } from '@/components/Input/MenuField';

import styles from './styles.module.scss';

const drop1 = [
  { id: 1, value: 'Complete' },
  { id: 2, value: 'Chat' },
  { id: 3, value: 'Insert' },
  { id: 4, value: 'Edit' },
];

export const SettingsForm = () => {
  return (
    <div className={styles.form}>
      <MenuField className={styles.formField} name='name' label='Name' placeholder='Canvas name' />
      <MenuField className={styles.formField} name='description' label='Description' placeholder='Canvas description' />
      <div className={styles.formCustomization}>
        <h2 className={styles.formTitle}>API</h2>
        <Radio name='api' label='Default' />
        <MenuDropdown valueList={drop1} />
      </div>
    </div>
  );
};
