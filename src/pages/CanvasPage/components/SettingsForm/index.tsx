import { FC } from 'react';

import { Radio } from '@/components/CheckField/Radio';
import { MenuField } from '@/components/Input/MenuField';

import styles from './styles.module.scss';

export const SettingsForm = () => {
  return (
    <div className={styles.form}>
      <MenuField className={styles.formField} name='name' label='Name' placeholder='Canvas name' />
      <MenuField className={styles.formField} name='description' label='Description' placeholder='Canvas description' />
      <div className={styles.formCustomization}>
        <h2 className={styles.formTitle}>API</h2>
        <Radio name='api' label='Default' />
      </div>
    </div>
  );
};
