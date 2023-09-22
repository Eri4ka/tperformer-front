import {ReactComponent as CopyIc} from '@/assets/images/button/copy.svg';
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import styles from "@/pages/CreateSnippetsPage/components/Header/Header.module.scss";
import {useAppSelector} from "@/store/hooks.ts";
const CopySnippetsButton = () => {
    const content=useAppSelector(state => state.snippetsReducer.snippet.content)
    return (
        <BaseButton
            className={styles.iconButton}
            variant={ButtonVariant.icon}
            onClick={() => {
                navigator.clipboard.writeText( content );
            }}
            icon={<CopyIc/>}
            disabled={false}/>
    );
};

export default CopySnippetsButton;