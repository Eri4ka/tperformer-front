import { RequestField } from '@/components/Input/RequestField';

import { RequestHelp } from './components/RequestHelp';
import styles from './styles.module.scss';

export const Request = () => {
  return (
    <div className={styles.request}>
      <RequestHelp />
      <RequestField name='request' placeholder='Type here ...' />
    </div>
  );
};
