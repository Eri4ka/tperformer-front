import Cookies from "js-cookie";
import {useEffect} from "react";
import {Navigate, Outlet} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {fetchUser} from "@/store/slices/authSlice.ts";


export const ProtectedRoute = () => {
    const isAuthorized = useAppSelector((state) => state.authReducer.authorized);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (Cookies.get('token')) {
            dispatch(fetchUser({}))
        }
    }, [dispatch])

    if (isAuthorized) {
        return <Outlet/>;
    }

    return <Navigate to={'/signin'}/>;
};
