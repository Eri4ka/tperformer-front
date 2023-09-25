import {TErrorResBody} from "@/api/types/authTypes.ts";
import {
    TCreateSnippetReqBody,
    TCreateSnippetResBody,
    TGetAllSnippetsReqBody,
    TSnippetResBody,
    TUpdateSnippetReqBody
} from "@/api/types/snippetsType.ts";

import {request} from '../request';


class SnippetsService {

    getAllSnippets = async (data: TGetAllSnippetsReqBody) => {
        return await request<TSnippetResBody[], TErrorResBody, TGetAllSnippetsReqBody>({
            url: '/api/prompt/snippet/',
            method: 'GET',
            data
        });
    };
    getSnippet = async (id: number) => {
       return  await request<TSnippetResBody, TErrorResBody, number>({
            url: `/api/prompt/snippet/${id}`,
            method: 'GET',
        });
    };
    createSnippet = async (data: TCreateSnippetReqBody) => {
       return  await request<TCreateSnippetResBody, TErrorResBody, TCreateSnippetReqBody>({
            url: '/api/prompt/snippet/',
            method: 'POST',
            data
        });
    };
    updateSnippet = async (data: TUpdateSnippetReqBody) => {
        return  await request<TCreateSnippetResBody, TErrorResBody, TUpdateSnippetReqBody>({
            url: `/api/prompt/snippet/${data.id}/`,
            method: 'PUT',
            data
        });

    };
    removeSnippet = async (id: number) => {
       return  await request<null, TErrorResBody, number>({
            url: `/api/prompt/snippet/${id}/`,
            method: 'DELETE'
        });
    };
    

}

export default new SnippetsService();
