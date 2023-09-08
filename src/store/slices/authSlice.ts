import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { TAxiosError } from '@/api/request';
import AuthService from '@/api/services/AuthService';
import {
  TRegistrationReqBody,
  TRegistrationResErrBody,
  TLoginReqBody,
  TLoginResErrBody,
  TDetailResBody,
} from '@/api/types/authTypes';

import { TStateStatus } from '../types';
import { TDiscordCallbackBody } from '@/api/types/discordAuthTypes';
import DiscordAuthService from '@/api/services/DiscordAuthService';

type AuthState = {
  authorized: boolean;
  registerStatus: TStateStatus;
  registerErrors: TRegistrationResErrBody;
  loginStatus: TStateStatus;
  loginErrors: TLoginResErrBody;
  userError: string;
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
  authorized: false,
  registerStatus: 'init',
  registerErrors,
  loginStatus: 'init',
  loginErrors,
  userError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => initialState,
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
        state.loginStatus = 'success';
        state.authorized = true;
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.loginStatus = 'error';

        if (action.payload && typeof action.payload === 'object') {
          state.loginErrors = action.payload;
        }
      })
      .addCase(fetchDiscordLoginUser.fulfilled, (state) => {
        state.loginStatus = 'success';
        state.authorized = true;
      })
      .addCase(fetchUser.fulfilled, (state) => {
        state.authorized = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.authorized = false;

        if (action.payload && typeof action.payload === 'object') {
          state.userError = action.payload.detail;
        }
        console.log(action);
      });
  },
});

export const fetchCreateUser = createAsyncThunk<
  unknown,
  TRegistrationReqBody,
  { rejectValue: TRegistrationResErrBody }
>('auth/fetchCreateUser', async (args, { rejectWithValue }) => {
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

export const fetchLoginUser = createAsyncThunk<unknown, TLoginReqBody, { rejectValue: TLoginResErrBody }>(
  'auth/fetchLoginUser',
  async (args, { rejectWithValue }) => {
    try {
      await AuthService.login(args);
    } catch (err) {
      const error = err as TAxiosError<TLoginResErrBody>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchDiscordLoginUser = createAsyncThunk<unknown, TDiscordCallbackBody, { rejectValue: unknown }>(
  'auth/fetchDiscordLoginUser',
  async (args, { rejectWithValue }) => {
    try {
      await DiscordAuthService.login(args);
    } catch (err) {
      const error = err as TAxiosError<unknown>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
); // TODO: rejectValue

export const fetchLogoutUser = createAsyncThunk('auth/fetchLogoutUser', async (_, { dispatch }) => {
  await AuthService.logout();
  dispatch(authActions.logOut());
});

export const fetchUser = createAsyncThunk<unknown, unknown, { rejectValue: TDetailResBody }>(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await AuthService.user();

      return data;
    } catch (err) {
      const error = err as TAxiosError<TDetailResBody>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const { reducer: authReducer, actions: authActions } = authSlice;
