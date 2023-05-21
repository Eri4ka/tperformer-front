import { RequestHelp } from './components/RequestHelp';
import styles from './styles.module.scss';
import { RequestEnter } from '../RequestEnter';

export const Request = () => {
  return (
    <div className={styles.request}>
      <RequestHelp />
      <RequestEnter />
    </div>
  );
};
