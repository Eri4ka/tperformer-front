import React, {ChangeEvent, useEffect} from "react";

import {useDebounce} from "@/hooks/useDebounce.ts";
import styles from "@/pages/CreateSnippetsPage/CreateSnippetsPage.module.scss";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {snippetsAction, updateSnippet} from "@/store/slices/snippetsSlice.ts";


const TextArea =() => {
    const content = useAppSelector(state => state.snippetsReducer.snippet.content)
    const id = useAppSelector(state => state.snippetsReducer.snippet.id)
    const dispatch=useAppDispatch()

    const debouncedTitle = useDebounce<string>(content, 500)
    useEffect(() => {
        if (id === 0||content.trim()==='') return

        dispatch(updateSnippet({}))
    }, [debouncedTitle])

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(snippetsAction.changeSnippet({content:e.currentTarget.value}))
    }

    return (
        <textarea
            className={styles.textarea}
            value={content}
            onChange={onChangeHandler}
            placeholder={'Enter text snippets'}
        />
    );
};

export default TextArea;