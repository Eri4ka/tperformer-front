import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {BaseButton} from "@/components/Button/BaseButton";
import {ButtonsGroup} from "@/components/ButtonsGroup";
import {ContentLayout} from "@/components/ContentLayout";
import {Heading} from "@/components/Heading";
import {SnippetsTable} from "@/pages/SnippetsPage/components/SnippetsTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {createSnippet, fetchSnippets} from "@/store/slices/snippetsSlice.ts";

const Snippets = () => {
    const router = useNavigate()
    const snippets = useAppSelector(state => state.snippetsReducer.snippets)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSnippets({}))
    }, [dispatch])

    return (
        <ContentLayout>
            <Heading text='Snippets'>
                <ButtonsGroup>
                    <BaseButton onClick={() => {
                        dispatch(createSnippet("create"))
                            .then((data) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                if(data.payload&&data.payload.id)router(`/publicSnippets/${data.payload?.id}`)
                            })
                    }
                    } additional>Create</BaseButton>
                </ButtonsGroup>
            </Heading>
            <SnippetsTable data={snippets}/>
        </ContentLayout>
    );
};

export default Snippets;