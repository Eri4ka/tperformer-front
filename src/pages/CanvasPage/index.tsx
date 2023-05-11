import { BreadCrumbs } from '@/components/BreadCrumbs';
import { ContentLayout } from '@/components/ContentLayout';
import { SettingsMenu } from '@/components/SettingsMenu';

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
      </ContentLayout>
      <SettingsMenu>hi</SettingsMenu>
    </>
  );
};
