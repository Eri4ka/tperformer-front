import {useNavigate} from "react-router-dom";

import {route} from "@/components/AppRouter/constants.ts";
import {BaseButton} from "@/components/Button/BaseButton";

import styles from './Erorr404.module.scss'




const Error404 = () => {
    const navigate=useNavigate()
    return (
            <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <BaseButton onClick={() => {
                        navigate(route.home)}} >Go to Home Page</BaseButton>
                    <BaseButton onClick={() => {
                        console.log('bla')}} >Support</BaseButton>
                </div>
            </div>
    );
};

export default Error404;