import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AppState = {
    snackbar: string,
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


});



export const {reducer: appReducer, actions: appActions} = appSlice;
