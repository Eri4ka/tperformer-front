import {useNavigate} from "react-router-dom";

import {BaseButton} from "@/components/Button/BaseButton";
import {ButtonsGroup} from "@/components/ButtonsGroup";
import {ContentLayout} from "@/components/ContentLayout";
import {Heading} from "@/components/Heading";
import {SnippetsTable} from "@/pages/SnippetsPage/components/SnippetsTable";
import {TSnippets} from "@/pages/SnippetsPage/components/SnippetsTable/types";

const defaultData: TSnippets[] = [
    {
        title: 'Title',
        discription: 'Text about canvas ',
        created: '5/3/2023',
    },
    {
        title: 'bla',
        discription: 'Text about canvas ',
        created: '1/3/2023',
    },
    {
        title: 'fff',
        discription: 'Text about canvas ',
        created: '1/3/2023',
    },
    {
        title: 'asdasda',
        discription: 'Text about canvas ',
        created: '1/3/2023',
    },
    {
        title: 'fsrgerggere',
        discription: 'Text about canvas ',
        created: '1/3/2023',
    },
    {
        title: 'vbttybbt',
        discription: 'Text about canvas ',
        created: '1/3/2023',
    },
];
const Snippets = () => {
    const router=useNavigate()
    return (
        <ContentLayout>
            <Heading text='Snippets'>
                <ButtonsGroup>
                    <BaseButton onClick={()=>router(`/publicSnippets/newTitle`)} additional>Create</BaseButton>
                </ButtonsGroup>
            </Heading>
            <SnippetsTable data={defaultData} />
        </ContentLayout>
    );
};

export default Snippets;