import { configureStore } from '@reduxjs/toolkit';

import {appReducer} from "@/store/slices/appSlice.ts";
import {snippetsReducer} from "@/store/slices/snippetsSlice.ts";

import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: { authReducer, snippetsReducer,appReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
