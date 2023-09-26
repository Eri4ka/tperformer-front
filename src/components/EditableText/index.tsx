import {ChangeEvent, memo, useState} from "react";

import {Tooltip} from "@/components/Tooltip";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {snippetsAction} from "@/store/slices/snippetsSlice.ts";

import styles from './EditableText.module.scss'


type EditableSpanPropsType = {
    disabled: boolean
}
const EditableText: React.FC<EditableSpanPropsType> = memo(({disabled}) => {
    const title = useAppSelector(state => state.snippetsReducer.snippet.title)
    const [editMode, setEditMode] = useState(true);
    const dispatch = useAppDispatch()

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
        ? <input maxLength={255} className={styles.input} value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <Tooltip id={'edit'} content={'Double click to edit'}>
            <div className={styles.text} onDoubleClick={activateEditMode}>
                {title}
            </div>
        </Tooltip>}
        {title === '' && <div className={styles.error}>Require field</div>}
    </div>
});

export default EditableText;