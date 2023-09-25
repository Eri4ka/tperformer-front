import {useState} from 'react';
import {Outlet} from 'react-router-dom';

import {Content} from './components/Content';
import {Header} from './components/Header';
import {SideBar} from './components/SideBar';
import styles from './styles.module.scss';


export const AppLayout = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleToggleSideBarOpen = () => setSideBarOpen((current) => !current);



  return (
    <div className={styles.app}>
      <Header onBurger={handleToggleSideBarOpen} />
      <main className={styles.appLayout}>
        <SideBar isOpen={isSideBarOpen} />
        <Content>
          <Outlet />
        </Content>
      </main>
    </div>
  );
};
