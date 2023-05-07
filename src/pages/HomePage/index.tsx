import { BaseButton } from '@/components/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { ContentLayout } from '@/components/ContentLayout';
import Heading from '@/components/Heading';
import { Table } from '@/components/Table';

export const HomePage = () => {
  return (
    <ContentLayout>
      <Heading text='Home' />
      <ButtonsGroup>
        <BaseButton additional>New Canvas</BaseButton>
      </ButtonsGroup>
      <Table />
    </ContentLayout>
  );
};
