import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Cookies from "js-cookie";

import {TAxiosError} from '@/api/request';
import AuthService from '@/api/services/AuthService';
import OAuthService from '@/api/services/OAuthService';
import {
    TDetailResBody,
    TLoginReqBody,
    TLoginResErrBody,
    TRegistrationReqBody,
    TRegistrationResErrBody,
    TUserResBody,
} from '@/api/types/authTypes';
import {OAuthCallbackBody} from '@/api/types/OAuthTypes';

import {TStateStatus} from '../types';


type AuthState = {
    authorized: boolean;
    registerStatus: TStateStatus;
    registerErrors: TRegistrationResErrBody;
    loginStatus: TStateStatus;
    loginErrors: TLoginResErrBody;
    userError: string;
    user: {
        username: string
        email: string
        first_name: string
        last_name: string
        pk: number;
    } | null;
};

const registerErrors: TRegistrationResErrBody = {
    username: [],
    email: [],
    password1: [],
    password2: [],
    non_field_errors: [],
};

const loginErrors: TLoginResErrBody = {
    email: [],
    password: [],
    non_field_errors: [],
};

const initialState: AuthState = {
    authorized: !!Cookies.get('token'),
    registerStatus: 'init',
    registerErrors,
    loginStatus: 'init',
    loginErrors,
    userError: '',
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateUser.pending, (state) => {
                state.registerStatus = 'loading';
                state.registerErrors = registerErrors;
            })
            .addCase(fetchCreateUser.fulfilled, (state) => {
                state.registerStatus = 'success';
                state.authorized = true;
            })
            .addCase(fetchCreateUser.rejected, (state, action) => {
                state.registerStatus = 'error';

                if (action.payload && typeof action.payload === 'object') {
                    state.registerErrors = action.payload;
                }
            })
            .addCase(fetchLoginUser.pending, (state) => {
                state.loginStatus = 'loading';
                state.loginErrors = loginErrors;
            })
            .addCase(fetchLoginUser.fulfilled, (state) => {
                state.authorized=true
                state.loginStatus = 'success';
            })
            .addCase(fetchLoginUser.rejected, (state, action) => {
                state.loginStatus = 'error';

                if (action.payload && typeof action.payload === 'object') {
                    state.loginErrors = action.payload;
                }
            })
            .addCase(fetchOAuthLoginUser.fulfilled, (state) => {
                state.loginStatus = 'success';
                state.authorized = true;
            })
            .addCase(fetchUser.pending, (state) => {
                state.loginStatus = 'loading';
                state.loginErrors = loginErrors;
            })
            .addCase(fetchUser.fulfilled, (state,action) => {
                state.loginStatus = 'success';
                if(action.payload)state.user={...action.payload}
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.authorized = false;
                state.loginStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.userError = action.payload.detail;
                }
            })
            .addCase(fetchLogoutUser.pending, (state) => {
                state.loginStatus = 'loading';
                state.loginErrors = loginErrors;
            })
            .addCase(fetchLogoutUser.fulfilled, (state) => {
                state.loginStatus = 'init';
                state.user=null;
                state.authorized=false;
            })
            .addCase(fetchLogoutUser.rejected, (state, action) => {
                state.authorized = false;
                state.loginStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.userError = action.payload.detail;
                }
            })
    },
});

export const fetchCreateUser = createAsyncThunk<
    unknown,
    TRegistrationReqBody,
    { rejectValue: TRegistrationResErrBody }
>('auth/fetchCreateUser', async (args, {rejectWithValue}) => {
    try {
        await AuthService.registraion(args);
    } catch (err) {
        const error = err as TAxiosError<TRegistrationResErrBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});

export const fetchLoginUser = createAsyncThunk<
    unknown,
    TLoginReqBody,
    { rejectValue: TLoginResErrBody }>(
    'auth/fetchLoginUser',
    async (args, {rejectWithValue, dispatch}) => {
        try {
            const res = await AuthService.login(args);
            Cookies.set('token',res.data.key)
            dispatch(fetchUser({}))

        } catch (err) {
            const error = err as TAxiosError<TLoginResErrBody>;

            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

export const fetchOAuthLoginUser = createAsyncThunk<unknown, OAuthCallbackBody, { rejectValue: unknown }>(
    'auth/fetchOAuthLoginUser',
    async (args, {rejectWithValue}) => {
        try {
            await OAuthService.login(args);
        } catch (err) {
            const error = err as TAxiosError<unknown>;

            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

export const fetchLogoutUser = createAsyncThunk<
    unknown,
    unknown,
    { rejectValue: TDetailResBody }>('auth/fetchLogoutUser', async (_,{rejectWithValue}) => {
    try {
        await AuthService.logout();
        Cookies.remove('token')
    } catch (err) {
        const error = err as TAxiosError<TDetailResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }


});

export const fetchUser = createAsyncThunk<TUserResBody, unknown, { rejectValue: TDetailResBody }>(
    'auth/fetchUser',
    async (_, {rejectWithValue}) => {
        try {
            const res = await AuthService.user();
            return res.data;
        } catch (err) {
            const error = err as TAxiosError<TDetailResBody>;

            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

export const {reducer: authReducer, actions: authActions} = authSlice;
