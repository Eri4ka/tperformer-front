import React, {ChangeEvent} from "react";

import styles from "@/pages/CreateSnippetsPage/CreateSnippetsPage.module.scss";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {snippetsAction} from "@/store/slices/snippetsSlice.ts";


const TextArea =() => {
    const content = useAppSelector(state => state.snippetsReducer.snippet.content)
    const dispatch=useAppDispatch()

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