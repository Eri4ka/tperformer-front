import axios, { AxiosError, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

type TRequest<T> = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: T;
  headers?: object;
  withCredentials?: boolean;
};

export type TAxiosError<T> = AxiosError<T>;

export const request = async <K, D, T = undefined>({
  url,
  method = 'GET',
  data,
  headers,
  withCredentials,
}: TRequest<T>): Promise<AxiosResponse<K>> => {
  try {
    const response = await api({
      url,
      method,
      data,
      headers,
      withCredentials,
    });
    return response;
  } catch (error) {
    throw error as TAxiosError<D>;
  }
};
