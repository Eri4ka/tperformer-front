import {ReactComponent as CopyIc} from '@/assets/images/button/copy.svg';
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import styles from "@/pages/CreateSnippetsPage/components/Header/Header.module.scss";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {appActions} from "@/store/slices/appSlice.ts";
const CopySnippetsButton = () => {
    const content=useAppSelector(state => state.snippetsReducer.snippet.content)
   const dispatch=useAppDispatch()
    return (
        <BaseButton
            className={styles.iconButton}
            variant={ButtonVariant.icon}
            tooltip={'Copy text'}
            onClick={() => {
                dispatch(appActions.setSnackbar('Text copied'))
                navigator.clipboard.writeText( content );
            }}
            icon={<CopyIc/>}
            disabled={false}/>
    );
};

export default CopySnippetsButton;