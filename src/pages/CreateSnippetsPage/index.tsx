import {useEffect} from "react";

import {BreadCrumbs} from "@/components/BreadCrumbs";
import {ContentLayout} from "@/components/ContentLayout";
import {date} from "@/helpers/date.ts";
import Header from "@/pages/CreateSnippetsPage/components/Header";
import TextArea from "@/pages/CreateSnippetsPage/components/TextArea";
import {useAppDispatch} from "@/store/hooks.ts";
import {removeSnippet, updateSnippet} from "@/store/slices/snippetsSlice.ts";

const crumbsList = [
    {
        id: 1,
        path: '/publicSnippets',
        name: 'publicSnippets',
    },
    {
        id: 2,
        path: '/publicSnippets/newTitle',
        name: `newTitle_author_${date}`,
    },
];

const CreateSnippetsPage = () => {
    const dispatch=useAppDispatch()

    useEffect(()=>{

        return ()=>{
            dispatch(updateSnippet(null))
             dispatch(removeSnippet("page"))
        }
    },[dispatch])

    return (
        <ContentLayout>
            <BreadCrumbs data={crumbsList}/>
            <Header  />
            <TextArea />
        </ContentLayout>
    );
};

export default CreateSnippetsPage;