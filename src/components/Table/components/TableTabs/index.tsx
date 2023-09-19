import React, {Dispatch, SetStateAction} from "react";

import {Ttab} from "@/pages/SnippetsPage/components/SnippetsTable/types";

import styles from "./TableTab.module.scss";


type Props = {
    tabData: string[]
    tabActive: Ttab
    setActiveTab: Dispatch<SetStateAction<Ttab>>
}
const TableTabs: React.FC<Props> = ({tabData, tabActive, setActiveTab}) => {

    return (
        <div className={styles.tabContainer}>
            {tabData.map((tab,index) => {

                const classNameItem = tabActive==tab ? styles.tabItem + ' ' + styles.active : styles.tabItem
                const onClickHandler = () => {
                    setActiveTab(tab as Ttab)
                }
                return <button
                    className={classNameItem}
                    onClick={onClickHandler}
                    key={index}
                >
                    {tab}
                </button>
            })}
        </div>
    );

};

export default TableTabs;