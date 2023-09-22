import { BaseButton } from '@/components/Button/BaseButton';
import { ButtonsGroup } from '@/components/ButtonsGroup';
import { ContentLayout } from '@/components/ContentLayout';
import { Heading } from '@/components/Heading';
import {useAppSelector} from "@/store/hooks.ts";

import { CanvasTable } from './components/CanvasTable';

export const HomePage = () => {
    const key=useAppSelector(state => state.authReducer)
    console.log( key)
  return (
    <ContentLayout>
      <Heading text='Home'>
        <ButtonsGroup>
          <BaseButton additional>New Canvas</BaseButton>
        </ButtonsGroup>
      </Heading>
      <CanvasTable />
    </ContentLayout>
  );
};
