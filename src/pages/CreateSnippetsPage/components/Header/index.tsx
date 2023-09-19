import {ReactComponent as CopyIc} from '@/assets/images/button/copy.svg';
import {ReactComponent as CopyCreateIc} from '@/assets/images/button/copyCreate.svg';
import {ReactComponent as TrashIc} from '@/assets/images/button/trash.svg';
import {BaseButton, ButtonVariant} from "@/components/Button/BaseButton";
import EditableText from "@/components/EditableText";

import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <EditableText
                value={'NewTitle'}
                onChange={() => {
                    console.log('bla')
                }}
                disabled={false}/>
            <div className={styles.iconButtonContainer}>
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    onClick={() => {
                        console.log('click')
                    }}
                    icon={<TrashIc/>}
                    disabled={false}/>
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    onClick={() => {
                        console.log('click')
                    }}
                    icon={<CopyIc/>}
                    disabled={false}/>
                <BaseButton
                    className={styles.iconButton}
                    variant={ButtonVariant.icon}
                    onClick={() => {
                        console.log('click')
                    }}
                    icon={<CopyCreateIc/>}
                    disabled={false}/>

            </div>
        </div>
    );
};

export default Header;