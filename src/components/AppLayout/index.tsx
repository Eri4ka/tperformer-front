import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import styles from './styles.module.scss';

export const AppLayout = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Outlet />
    </main>
  );
};
