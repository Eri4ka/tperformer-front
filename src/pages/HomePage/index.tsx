import { BaseButton } from '@/components/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { ContentLayout } from '@/components/ContentLayout';
import Heading from '@/components/Heading';

import { CanvasTable } from './components/CanvasTable';

export const HomePage = () => {
  return (
    <ContentLayout>
      <Heading text='Home' />
      <ButtonsGroup>
        <BaseButton additional>New Canvas</BaseButton>
      </ButtonsGroup>
      <CanvasTable />
    </ContentLayout>
  );
};
