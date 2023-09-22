import Cookies from 'js-cookie';

import {
    TCreateSnippetErrBody,
    TCreateSnippetReqBody, TCreateSnippetResBody, TSnippetResBody,
    TGetAllSnippetsErrBody,
    TGetAllSnippetsReqBody,
    TRemoveErrBody,
    TUpdateSnippetReqBody
} from "@/api/types/snippetsType.ts";

import {request} from '../request';


class SnippetsService {

    getAllSnippets = async (data: TGetAllSnippetsReqBody) => {
        const response = await request<TSnippetResBody[], TGetAllSnippetsErrBody, TGetAllSnippetsReqBody>({
            url: '/api/prompt/snippet/',
            method: 'GET',
            data,
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
            },
        });

        return response;
    };
    createSnippet = async (data: TCreateSnippetReqBody) => {
        const response = await request<TCreateSnippetResBody, TCreateSnippetErrBody, TCreateSnippetReqBody>({
            url: '/api/prompt/snippet/',
            method: 'POST',
            data,
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
            },
        });

        return response;
    };
    updateSnippet = async (data: TUpdateSnippetReqBody) => {
        const response = await request<TCreateSnippetResBody, TRemoveErrBody, TUpdateSnippetReqBody>({
            url: `/api/prompt/snippet/${data.id}/`,
            method: 'PUT',
            data,
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
            },
        });

        return response;
    };
    removeSnippet = async (id: number) => {
        const response = await request<null, TRemoveErrBody, number>({
            url: `/api/prompt/snippet/${id}/`,
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
            },
        });

        return response;
    };

}

export default new SnippetsService();
