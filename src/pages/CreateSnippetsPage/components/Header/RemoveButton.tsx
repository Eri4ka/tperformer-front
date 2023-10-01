import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

import {ReactComponent as TrashIc} from '@/assets/images/button/trash.svg';
import {route} from "@/components/AppRouter/constants.ts";
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import styles from "@/pages/CreateSnippetsPage/components/Header/Header.module.scss";
import {useAppSelector} from "@/store/hooks.ts";
import {removeSnippet} from "@/store/slices/snippetsSlice.ts";
import {RootState} from "@/store/store.ts";


type Props={
    dispatch:ThunkDispatch<RootState, undefined, AnyAction>
}
const RemoveButton:React.FC<Props> = ({dispatch}) => {
    const navigate = useNavigate()
    const status=useAppSelector(state => state.snippetsReducer.removeSnippet)
    return (
        <BaseButton
            className={styles.iconButton}
            variant={ButtonVariant.icon}
            tooltip={'Delete'}
            onClick={() => {
                dispatch(removeSnippet("button"))
                    .then(() => navigate(route.publicSnippets))
            }}
            icon={<TrashIc/>}
            isLoading={status==="loading"}
        />
    );
};

export default RemoveButton;