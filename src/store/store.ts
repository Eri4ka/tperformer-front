import { configureStore } from '@reduxjs/toolkit';

import {snippetsReducer} from "@/store/slices/snippetsSlice.ts";

import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: { authReducer, snippetsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
