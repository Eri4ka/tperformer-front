import {useNavigate} from "react-router-dom";

import {ReactComponent as CopyCreateIc} from '@/assets/images/button/copyCreate.svg';
import {ReactComponent as ShareIc} from '@/assets/images/button/share.svg';
import {ReactComponent as TrashIc} from '@/assets/images/button/trash.svg';
import {route} from "@/components/AppRouter/constants.ts";
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import EditableText from "@/components/EditableText";
import CopySnippetsButton from "@/pages/CreateSnippetsPage/components/Header/CopySnippetsButton.tsx";
import {useAppDispatch} from "@/store/hooks.ts";
import {createSnippet, removeSnippet} from "@/store/slices/snippetsSlice.ts";

import styles from './Header.module.scss'


const Header = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <EditableText
                disabled={false}/>
            <div className={styles.iconButtonContainer}>

                {/*Trash*/}
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    tooltip={'Delete'}
                    onClick={() => {
                        dispatch(removeSnippet("button"))
                            .then(() => navigate(route.publicSnippets))
                    }}
                    icon={<TrashIc/>}
                    disabled={false}/>
                {/*share button*/}
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    tooltip={'Copy url'}
                    onClick={() => {
                        navigator.clipboard.writeText(location.href);
                    }}
                    icon={<ShareIc/>}
                    disabled={false}/>
                {/*Copy snippets*/}
                <CopySnippetsButton/>

                {/*Copy and create new snippets*/}
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    tooltip={'Make a copy'}
                    onClick={() => {
                        console.log('click')
                        dispatch(createSnippet({}))
                    }}
                    icon={<CopyCreateIc/>}
                    disabled={false}/>
            </div>
        </div>
    );
};

export default Header;