

export type TSnippetResBody = {
    id: number;
    title: string;
    content: string;
    hidden: boolean;
};

export type TGetAllSnippetsReqBody = {
    id?: number;
    title?: string;
    content?: string;
    hidden?: boolean;
    created_at?:string;
    updated_at?:string;
};

export type TGetAllSnippetsErrBody = Record<keyof TGetAllSnippetsReqBody | 'non_field_errors', string[]>;

export type TCreateSnippetReqBody={
    title: string;
    content: string;
    hidden: boolean;
}|null
export type TCreateSnippetErrBody= Record<keyof TCreateSnippetReqBody | 'non_field_errors', string[]>;
export type TRemoveErrBody={ 'non_field_errors': string[]};

export type TCreateSnippetResBody = {
    id: number;
    title: string;
    content: string;
    hidden: boolean;
};
export type TUpdateSnippetReqBody={
    id?: number;
    title?: string;
    content?: string;
    hidden?: boolean;
}
export type TRemoveReqBody= 'button'|'page'