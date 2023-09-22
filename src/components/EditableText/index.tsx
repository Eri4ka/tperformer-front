import {ChangeEvent, memo, useEffect, useState} from "react";

import {Tooltip} from "@/components/Tooltip";
import {useDebounce} from "@/hooks/useDebounce.ts";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {snippetsAction, updateSnippet} from "@/store/slices/snippetsSlice.ts";

import styles from './EditableText.module.scss'


type EditableSpanPropsType = {
    disabled: boolean
}
const EditableText: React.FC<EditableSpanPropsType> = memo(({disabled}) => {
    const title = useAppSelector(state => state.snippetsReducer.snippet.title)

    const id = useAppSelector(state => state.snippetsReducer.snippet.id)

    const [editMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch()

    const debouncedTitle = useDebounce<string>(title, 500)

    useEffect(() => {
        if (id === 0 || title.trim() === '') return

        dispatch(updateSnippet({}))
    }, [debouncedTitle])
    console.log(title)

    const activateEditMode = () => {
        if (disabled) {
            return
        }
        setEditMode(true);
        dispatch(snippetsAction.changeSnippet({title}))
    }
    const activateViewMode = () => {
        if (title !== '') setEditMode(false);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(snippetsAction.changeSnippet({title: e.currentTarget.value}))
    }


    return <div className={styles.container}>{editMode
        ? <input className={styles.input} value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <Tooltip id={'edit'} content={'Double click to edit'}>
            <span className={styles.text} onDoubleClick={activateEditMode}>
                {title}
            </span>
        </Tooltip>}
        {title === '' && <div className={styles.error}>Require field</div>}
    </div>
});

export default EditableText;