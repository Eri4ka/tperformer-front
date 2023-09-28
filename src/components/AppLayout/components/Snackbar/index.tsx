import React, {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {appActions} from "@/store/slices/appSlice.ts";

import styles from './Snackbar.module.scss'


const Snackbar = () => {
    const text=useAppSelector(state => state.appReducer.snackbar)
    const dispatch=useAppDispatch()

    useEffect(()=>{
        if(text==='')return
        const  timeout=setTimeout(()=>{
               dispatch(appActions.setSnackbar(''))
           },800)

       return()=>{
           clearTimeout(timeout)
       }
   },[text,dispatch])
    const classNameSnackbar=text===''? styles.container:styles.container + ' ' + styles.show
    return (
        <div className={classNameSnackbar} >
            <div className={styles.icon}/>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
};

export default Snackbar;