import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TAxiosError} from '@/api/request';
import snippetsService from "@/api/services/SnippetsService.ts";
import {
    TCreateSnippetErrBody,
    TCreateSnippetReqBody,
    TCreateSnippetResBody,
    TGetAllSnippetsErrBody,
    TGetAllSnippetsReqBody,
    TRemoveErrBody, TRemoveReqBody,
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
            // state.snippet.title=action.payload.title
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
                state.snippet = action.payload
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
            .addCase(updateSnippet.fulfilled, (state,) => {
                state.snippetStatus = 'success';

            })
            .addCase(updateSnippet.rejected, (state, action) => {
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
    TCreateSnippetResBody,
    TCreateSnippetReqBody,
    {
        rejectValue: TCreateSnippetErrBody,
        state: RootState
    }
>('snippets/createSnippets', async (args, {rejectWithValue, getState}) => {
    try {

        if(args===null){
            const {content,hidden,title}=getState().snippetsReducer.snippet
            const res=await snippetsService.createSnippet({title,content,hidden})
            return res.data
        }
        const res = await snippetsService.createSnippet(args)
        return res.data

    } catch (err) {
        const error = err as TAxiosError<TCreateSnippetErrBody>;

        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
});
export const updateSnippet = createAsyncThunk<
    TCreateSnippetResBody,
    unknown,
    {
        rejectValue: TCreateSnippetErrBody,
        state: RootState
    }
>('snippets/updateSnippet', async (_, {rejectWithValue, getState}) => {
    try {
        const snippet = getState().snippetsReducer.snippet

        const res = await snippetsService.updateSnippet(snippet)
        return res.data

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
