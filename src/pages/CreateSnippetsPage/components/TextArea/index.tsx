import {ChangeEvent, useState} from "react";

import styles from "@/pages/CreateSnippetsPage/CreateSnippetsPage.module.scss";


const TextArea = () => {
    const [value, setValue] = useState<string>()
    console.log(value)
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <textarea
            className={styles.textarea}
            value={value}
            onChange={onChangeHandler}

            placeholder={'Enter text snippets'}
        />
    );
};

export default TextArea;