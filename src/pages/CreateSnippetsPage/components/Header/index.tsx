import {ReactComponent as ShareIc} from '@/assets/images/button/share.svg';
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import EditableText from "@/components/EditableText";
import CopySnippetsButton from "@/pages/CreateSnippetsPage/components/Header/CopySnippetsButton.tsx";
import DublicateSnippet from "@/pages/CreateSnippetsPage/components/Header/DublicateSnippet.tsx";
import RemoveButton from "@/pages/CreateSnippetsPage/components/Header/RemoveButton.tsx";
import {useAppDispatch} from "@/store/hooks.ts";
import {appActions} from "@/store/slices/appSlice.ts";

import styles from './Header.module.scss'


const Header = () => {

    const dispatch = useAppDispatch()
    return (
        <div className={styles.container}>
            <EditableText disabled={false}/>
            <div className={styles.iconButtonContainer}>
                {/*Trash*/}
                <RemoveButton dispatch={dispatch}/>
                {/*copy url button*/}
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    tooltip={'Copy url'}
                    onClick={() => {
                        navigator.clipboard.writeText(location.href);
                        dispatch(appActions.setSnackbar('URL copied '))
                    }}
                    icon={<ShareIc/>}
                />
                <CopySnippetsButton/>

                <DublicateSnippet dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default Header;