import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TAxiosError} from '@/api/request';
import snippetsService from "@/api/services/SnippetsService.ts";
import {
    TCreateSnippetErrBody,
    TCreateSnippetResBody,
    TGetAllSnippetsErrBody,
    TGetAllSnippetsReqBody,
    TRemoveErrBody,
    TRemoveReqBody,
    TSnippetResBody,
    TUpdateSnippetReqBody
} from "@/api/types/snippetsType.ts";
import {date} from "@/helpers/date.ts";
import {RootState} from "@/store/store.ts";
import {TStateStatus} from "@/store/types";

type SnippetsState = {
    snippetStatus: TStateStatus;
    snippets: TSnippetResBody[];
    snippet: TSnippetResBody
    errors: null | TGetAllSnippetsErrBody | TCreateSnippetErrBody | TRemoveErrBody;
};

const initialState: SnippetsState = {
    snippetStatus: 'init',
    snippets: [],
    snippet: {
        id: 0,
        content: 'enter your snippet',
        title: `New snippet_${date}`,
        hidden: false
    },
    errors: null
};

export const snippetsSlice = createSlice({
    name: 'snippets',
    initialState,
    reducers: {
        changeSnippet: (state, action: PayloadAction<TUpdateSnippetReqBody>) => {

            state.snippet = {...state.snippet, ...action.payload}
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSnippets.pending, (state) => {
                state.snippetStatus = 'loading';
            })
            .addCase(fetchSnippets.fulfilled, (state, action) => {
                state.snippets = action.payload
                state.snippetStatus = 'success';

            })
            .addCase(fetchSnippets.rejected, (state, action) => {
                state.snippetStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(createSnippet.pending, (state) => {
                state.snippetStatus = 'loading';
            })
            .addCase(createSnippet.fulfilled, (state, action) => {
                if (action.payload !== null) state.snippet = action.payload
                state.snippetStatus = 'success';

            })
            .addCase(createSnippet.rejected, (state, action) => {
                state.snippetStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(updateSnippet.pending, (state) => {
                state.snippetStatus = 'loading';
            })
            .addCase(updateSnippet.fulfilled, (state) => {
                state.snippet = {
                    id: 0,
                    content: 'enter your snippet',
                    title: `New snippet_${date}`,
                    hidden: false
                };
                state.snippetStatus = 'success';

            })
            .addCase(updateSnippet.rejected, (state, action) => {
                state.snippetStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })
            .addCase(removeSnippet.pending, (state) => {
                state.snippetStatus = 'loading';
            })
            .addCase(removeSnippet.fulfilled, (state) => {
                state.snippet = {
                    id: 0,
                    content: 'enter your snippet',
                    title: `New snippet_${date}`,
                    hidden: false
                };
                state.snippetStatus = 'success';

            })
            .addCase(removeSnippet.rejected, (state, action) => {
                state.snippetStatus = 'error';
                if (action.payload && typeof action.payload === 'object') {
                    state.errors = action.payload;
                }
            })

    },
});

export const fetchSnippets = createAsyncThunk<
    TSnippetResBody[],
    TGetAllSnippetsReqBody,
    { rejectValue: TGetAllSnippetsErrBody }
>('snippets/fetchSnippets', async (args, {rejectWithValue}) => {
    try {
        const res = await snippetsService.getAllSnippets(args)
        return res.data

    } catch (err) {
        const error = err as TAxiosError<TGetAllSnippetsErrBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const createSnippet = createAsyncThunk<
    TCreateSnippetResBody | null,
    'create'|'duplicate',
    {
        rejectValue: TCreateSnippetErrBody,
        state: RootState
    }
>('snippets/createSnippets', async (args, {rejectWithValue, getState}) => {
    try {

        const id = getState().snippetsReducer.snippet.id

        if ((id === 0 && args === 'create')||args==="duplicate") {
            const res = await snippetsService.createSnippet({
                title: `New snippet_${date}`,
                content: 'enter your spippet',
                hidden: false
            })
            return res.data
        }
        return null

    } catch (err) {
        const error = err as TAxiosError<TCreateSnippetErrBody>;

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
        rejectValue: TCreateSnippetErrBody,
        state: RootState
    }
>('snippets/updateSnippet', async (_, {rejectWithValue, getState}) => {
    try {
        const snippet = getState().snippetsReducer.snippet
        if (snippet.title.trim() !== '' && snippet.content.trim() !== '') {
            const res = await snippetsService.updateSnippet(snippet)
            return res.data
        }
        return null

    } catch (err) {
        const error = err as TAxiosError<TCreateSnippetErrBody>;

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
        rejectValue: TCreateSnippetErrBody,
        state: RootState
    }
>('snippets/removeSnippet', async (type, {rejectWithValue, getState}) => {
    try {
        const snippet = getState().snippetsReducer.snippet
        if (snippet.title.trim() === '' || snippet.content.trim() === '' || type === 'button') {
            await snippetsService.removeSnippet(snippet.id)
        }
        return null
    } catch (err) {
        const error = err as TAxiosError<TCreateSnippetErrBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});


export const {reducer: snippetsReducer, actions: snippetsAction} = snippetsSlice;
