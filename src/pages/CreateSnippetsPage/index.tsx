import {useEffect} from "react";

import {BreadCrumbs} from "@/components/BreadCrumbs";
import {ContentLayout} from "@/components/ContentLayout";
import {date} from "@/helpers/date.ts";
import Header from "@/pages/CreateSnippetsPage/components/Header";
import TextArea from "@/pages/CreateSnippetsPage/components/TextArea";
import {useAppDispatch} from "@/store/hooks.ts";
import {createSnippet, removeSnippet, snippetsAction} from "@/store/slices/snippetsSlice.ts";

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
    console.log('CreateSnippetsPage')

    useEffect(()=>{
        dispatch(createSnippet({title:`New snippet_${date}`, content:'enter your spippet',hidden:false}))
        return ()=>{
            dispatch(removeSnippet("page"))
            dispatch(snippetsAction.changeSnippet({title:`New snippet_${date}`, content:'enter your spippet',hidden:false, id:0}))
        }
    },[])

    return (
        <ContentLayout>
            <BreadCrumbs data={crumbsList}/>
            <Header  />
            <TextArea />
        </ContentLayout>
    );
};

export default CreateSnippetsPage;