import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {removeSnippet} from "@/store/slices/snippetsSlice.ts";

type AppState = {
    snackbar: string
};


const initialState: AppState = {
    snackbar: ''
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSnackbar: (state, action: PayloadAction<string>) => {
            state.snackbar = action.payload
        }
    },
        extraReducers: (builder) => {
            builder
                .addCase(removeSnippet.fulfilled, (state) => {
                    state.snackbar = 'Snippet deleted';
                })
        }


});



export const {reducer: appReducer, actions: appActions} = appSlice;
