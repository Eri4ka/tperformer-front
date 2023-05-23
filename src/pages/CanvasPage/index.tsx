import { useState } from 'react';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import { ContentLayout } from '@/components/ContentLayout';
import { SideMenu } from '@/components/SideMenu';

import { Request } from './components/Request';
import { SettingsForm } from './components/SettingsForm';

const crumbsList = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/dsdsd',
    name: 'New canvas',
  },
];

export const CanvasPage = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isRequestEnterOpen, setIsRequestEnterOpen] = useState(false);

  const isRequestHelpVisible = !isSideMenuOpen && !isRequestEnterOpen;

  const handleToggleMenu = () => setIsSideMenuOpen((current) => !current);

  const handleOpenRequestEnter = () => setIsRequestEnterOpen(true);

  return (
    <>
      <ContentLayout>
        <BreadCrumbs data={crumbsList} />
        <Request
          isRequestEnterOpen={isRequestEnterOpen}
          onOpenRequestEnter={handleOpenRequestEnter}
          isRequestHelpVisible={isRequestHelpVisible}
        />
      </ContentLayout>
      <SideMenu isOpen={isSideMenuOpen} onToggleMenu={handleToggleMenu} title='Settings'>
        <SettingsForm />
      </SideMenu>
    </>
  );
};
