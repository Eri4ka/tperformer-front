import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

import {ReactComponent as CopyCreateIc} from '@/assets/images/button/copyCreate.svg';
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import styles from "@/pages/CreateSnippetsPage/components/Header/Header.module.scss";
import {useAppSelector} from "@/store/hooks.ts";
import {createSnippet} from "@/store/slices/snippetsSlice.ts";
import {RootState} from "@/store/store.ts";


type Props={
    dispatch:ThunkDispatch<RootState, undefined, AnyAction>
}
const DublicateSnippet:React.FC<Props> = ({dispatch}) => {
    const dublicateStatus=useAppSelector(state => state.snippetsReducer.createSnippet)
    return (
        <BaseButton
            className={styles.iconButton}
            variant={ButtonVariant.icon}
            tooltip={'Make a copy'}
            onClick={() => {
                dispatch(createSnippet('dublicate'))
            }}
            icon={<CopyCreateIc/>}
            isLoading={dublicateStatus==="loading"}
        />
    );
};

export default DublicateSnippet;