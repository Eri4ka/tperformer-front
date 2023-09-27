import {useEffect, useLayoutEffect} from "react";
import {useLoaderData, useParams} from "react-router-dom";

import snippetsService from "@/api/services/SnippetsService.ts";
import {BreadCrumbs} from "@/components/BreadCrumbs";
import {ContentLayout} from "@/components/ContentLayout";
import {date} from "@/helpers/date.ts";
import Header from "@/pages/CreateSnippetsPage/components/Header";
import TextArea from "@/pages/CreateSnippetsPage/components/TextArea";
import {useAppDispatch} from "@/store/hooks.ts";
import {removeSnippet, snippetsAction, updateSnippet} from "@/store/slices/snippetsSlice.ts";

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
    const dispatch = useAppDispatch()
    const {id} = useParams()
    console.log('bla')
    const {data}  = useLoaderData() as Awaited<ReturnType<typeof snippetsService.getSnippet>>

    useLayoutEffect(() => {
        if (data) {
            dispatch(snippetsAction.setSnippet(data))
        }

    }, [data,dispatch])
    useEffect(() => {
        return () => {
            dispatch(updateSnippet(null))
            dispatch(removeSnippet("page"))
        }
    }, [dispatch, id])

    return (
        <ContentLayout>
            <BreadCrumbs data={crumbsList}/>
            <Header/>
            <TextArea/>
        </ContentLayout>
    );
};

export default CreateSnippetsPage;