import { Outlet } from 'react-router-dom';

import { Content } from './components/Content';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import styles from './styles.module.scss';

export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.appLayout}>
        <SideBar />
        <Content>
          <Outlet />
        </Content>
      </main>
    </div>
  );
};
