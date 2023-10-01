import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TAxiosError} from '@/api/request';
import snippetsService from "@/api/services/SnippetsService.ts";
import {TErrorResBody} from "@/api/types/authTypes.ts";
import {
    TCreateSnippetResBody,
    TGetAllSnippetsReqBody,
    TRemoveReqBody,
    TSnippetResBody,
    TUpdateSnippetReqBody
} from "@/api/types/snippetsType.ts";
import {date} from "@/helpers/date.ts";
import {appActions} from "@/store/slices/appSlice.ts";
import {RootState} from "@/store/store.ts";
import {TStateStatus} from "@/store/types";

type SnippetsState = {
    snippetsStatus: TStateStatus
    snippets: TSnippetResBody[]
    snippet: TSnippetResBody
    errors: null | TErrorResBody
    createSnippet: TStateStatus
    updateSnippet: TStateStatus
    removeSnippet: TStateStatus
    getSnippet: TStateStatus
};

const initialState: SnippetsState = {
    snippetsStatus: 'init',
    snippets: [],
    snippet: {
        id: 0,
        content: 'enter your snippet',
        title: `New snippet_${date}`,
        hidden: false
    },
    createSnippet: 'init',
    updateSnippet: 'init',
    removeSnippet: 'init',
    getSnippet: 'init',

    errors: null
};

export const snippetsSlice = createSlice({
    name: 'snippets',
    initialState,
    reducers: {
        changeSnippet: (state, action: PayloadAction<TUpdateSnippetReqBody>) => {

            state.snippet = {...state.snippet, ...action.payload}
        },
        setSnippet: (state, action: PayloadAction<TSnippetResBody>) => {
            state.snippet = action.payload
        },
        changeCreateStatus: (state, action: PayloadAction<TStateStatus>) => {
            state.createSnippet = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSnippets.pending, (state) => {
                state.snippetsStatus = 'loading';
            })
            .addCase(fetchSnippets.fulfilled, (state, action) => {
                state.snippets = action.payload
                state.snippetsStatus = 'success';

            })
            .addCase(fetchSnippets.rejected, (state, action) => {
                state.snippetsStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(createSnippet.pending, (state) => {
                state.createSnippet = 'loading';
            })
            .addCase(createSnippet.fulfilled, (state, action) => {
                state.snippet = {...action.payload.snippet}

                state.createSnippet = 'success';

            })
            .addCase(createSnippet.rejected, (state, action) => {
                state.createSnippet = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(updateSnippet.pending, (state) => {
                state.updateSnippet = 'loading';
            })
            .addCase(updateSnippet.fulfilled, (state) => {
                state.snippet = {
                    id: 0,
                    content: 'enter your snippet',
                    title: `New snippet_${date}`,
                    hidden: false
                };
                state.updateSnippet = 'success';

            })
            .addCase(updateSnippet.rejected, (state, action) => {
                state.updateSnippet = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(removeSnippet.pending, (state) => {
                state.removeSnippet = 'loading';
            })
            .addCase(removeSnippet.fulfilled, (state) => {
                state.snippet = {
                    id: 0,
                    content: 'Type here...',
                    title: `New snippet_${date}`,
                    hidden: false
                };
                state.removeSnippet = 'success';


            })
            .addCase(removeSnippet.rejected, (state, action) => {
                state.removeSnippet = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(fetchSnippet.pending, (state) => {
                state.getSnippet = 'loading';
            })
            .addCase(fetchSnippet.fulfilled, (state, action) => {
                state.snippet = action.payload
                state.getSnippet = 'success';

            })
            .addCase(fetchSnippet.rejected, (state, action) => {
                state.getSnippet = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })

    },
});

export const fetchSnippets = createAsyncThunk<
    TSnippetResBody[],
    TGetAllSnippetsReqBody,
    { rejectValue: TErrorResBody }
>('snippets/fetchSnippets', async (args, {rejectWithValue}) => {
    try {
        const res = await snippetsService.getAllSnippets(args)
        return res.data

    } catch (err) {
        const error = err as TAxiosError<TErrorResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const createSnippet = createAsyncThunk<
    { snippet: TCreateSnippetResBody, type: 'dublicate' | 'create' },
    'dublicate' | 'create',
    {
        rejectValue: TErrorResBody,
        state: RootState
    }
>('snippets/createSnippet', async (type, {rejectWithValue, dispatch}) => {
    try {
        const res = await snippetsService.createSnippet({
            title: `New snippet_${date}`,
            content: 'Type here...',
            hidden: false
        })
        if (type === "dublicate") dispatch(appActions.setSnackbar('Snippet dublicated'))
        if (type === "create") {
            dispatch(appActions.setSnackbar('Snippet created'))

        }
        return {snippet: res.data, type}
    } catch (err) {
        const error = err as TAxiosError<TErrorResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const updateSnippet = createAsyncThunk<
    TCreateSnippetResBody | null,
    unknown,
    {
        rejectValue: TErrorResBody,
        state: RootState
    }
>('snippets/updateSnippet', async (_, {rejectWithValue, getState}) => {
    try {
        const snippet = getState().snippetsReducer.snippet
        if (snippet.title.trim() !== '' && snippet.content.trim() !== '' && snippet.id !== 0) {
            const res = await snippetsService.updateSnippet(snippet)
            return res.data
        }
        return null

    } catch (err) {
        const error = err as TAxiosError<TErrorResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const removeSnippet = createAsyncThunk<
    null,
    TRemoveReqBody,
    {
        rejectValue: TErrorResBody,
        state: RootState
    }
>('snippets/removeSnippet', async (type, {rejectWithValue, getState, dispatch}) => {
    try {
        const snippet = getState().snippetsReducer.snippet

        if (snippet.title.trim() === '' || snippet.content.trim() === '' || type === 'button') {
            await snippetsService.removeSnippet(snippet.id)
            if (type === 'button') dispatch(appActions.setSnackbar('Snippet deleted'))
        }
        return null
    } catch (err) {
        const error = err as TAxiosError<TErrorResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const fetchSnippet = createAsyncThunk<
    TSnippetResBody,
    number,
    { rejectValue: TErrorResBody }
>('snippets/fetchSnippet', async (args, {rejectWithValue}) => {
    try {
        const res = await snippetsService.getSnippet(args)
        return res.data

    } catch (err) {
        const error = err as TAxiosError<TErrorResBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});


export const {reducer: snippetsReducer, actions: snippetsAction} = snippetsSlice;
