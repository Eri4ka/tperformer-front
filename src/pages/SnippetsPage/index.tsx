import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {BaseButton} from "@/components/Button/BaseButton";
import {ButtonsGroup} from "@/components/ButtonsGroup";
import {ContentLayout} from "@/components/ContentLayout";
import {Heading} from "@/components/Heading";
import {SnippetsTable} from "@/pages/SnippetsPage/components/SnippetsTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {fetchSnippets} from "@/store/slices/snippetsSlice.ts";

const Snippets = () => {
    const router=useNavigate()
    const snippets=useAppSelector(state => state.snippetsReducer.snippets)
    const dispatch=useAppDispatch()
    useEffect(()=>{
           dispatch(fetchSnippets({}))
    },[])
    return (
        <ContentLayout>
            <Heading text='Snippets'>
                <ButtonsGroup>
                    <BaseButton onClick={()=>router(`/publicSnippets/newTitle`)} additional>Create</BaseButton>
                </ButtonsGroup>
            </Heading>
            <SnippetsTable data={snippets} />
        </ContentLayout>
    );
};

export default Snippets;