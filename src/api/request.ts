import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

type TRequest<T> = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: T;
  headers?: object;
};

export type TAxiosError<T> = AxiosError<T>;

export const request = async <K, D, T = undefined>({ url, method = 'GET', data, headers }: TRequest<T>): Promise<K> => {
  try {
    const response = await api({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error as TAxiosError<D>;
  }
};
