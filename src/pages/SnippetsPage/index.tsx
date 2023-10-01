import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {route} from "@/components/AppRouter/constants.ts";
import {BaseButton} from "@/components/Button/BaseButton";
import {ButtonsGroup} from "@/components/ButtonsGroup";
import {ContentLayout} from "@/components/ContentLayout";
import {Heading} from "@/components/Heading";
import {SnippetsTable} from "@/pages/SnippetsPage/components/SnippetsTable";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {createSnippet, fetchSnippets} from "@/store/slices/snippetsSlice.ts";

const Snippets = () => {
    const navigate = useNavigate()
    const snippets = useAppSelector(state => state.snippetsReducer.snippets)
    const dispatch = useAppDispatch()
    const [isDisabled, setIsDisabled] = useState(false)
    useEffect(() => {
        dispatch(fetchSnippets({}))
    }, [dispatch])

    return (
        <ContentLayout>
            <Heading text='Snippets'>
                <ButtonsGroup>
                    <BaseButton
                        isLoading={isDisabled}
                        onClick={() => {
                            setIsDisabled(true)
                            dispatch(createSnippet("create")).then(res => {
                                    if (res.payload) {
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        navigate(`${route.publicSnippets}/${res.payload.snippet.id}`)
                                    }
                                }
                            ).catch(() => setIsDisabled(false)
                            )
                        }}
                        additional
                    >
                        Create
                    </BaseButton>
                </ButtonsGroup>
            </Heading>
            <SnippetsTable data={snippets}/>
        </ContentLayout>
    );
};

export default Snippets;