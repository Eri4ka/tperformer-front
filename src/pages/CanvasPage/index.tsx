import { BreadCrumbs } from '@/components/BreadCrumbs';
import { ContentLayout } from '@/components/ContentLayout';
import { SideMenu } from '@/components/SideMenu';

import { Request } from './components/Request';
import { SettingsForm } from './components/SettingsForm';

export const CanvasPage = () => {
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

  return (
    <>
      <ContentLayout>
        <BreadCrumbs data={crumbsList} />
        <Request />
      </ContentLayout>
      <SideMenu title='Settings'>
        <SettingsForm />
      </SideMenu>
    </>
  );
};
