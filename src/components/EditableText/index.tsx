import {ChangeEvent, useState} from "react";

import {Tooltip} from "@/components/Tooltip";

import styles from './EditableText.module.scss'


type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    disabled: boolean
}
const EditableText: React.FC<EditableSpanPropsType> = ({value, onChange, disabled}) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value);

    const activateEditMode = () => {
        if (disabled) {
            return
        }
        setEditMode(true);
        setTitle(value);

    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
            ? <input className={styles.text} value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
            : <Tooltip id={'edit'} content={'Double click to edit'}><span className={styles.text} onDoubleClick={activateEditMode}>{value}</span></Tooltip>
};

export default EditableText;