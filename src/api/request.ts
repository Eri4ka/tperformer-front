import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers:{
    authorization: `Bearer ${Cookies.get('token')}`
  }
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
    return  await api({
      url,
      method,
      data,
      headers,
      withCredentials,
    });
  } catch (error) {
    throw error as TAxiosError<D>;
  }
};
