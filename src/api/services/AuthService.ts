
import Cookies from "js-cookie";

import { REGISTRATION_ENDPOINT, LOGIN_ENDPOINT, USER_ENDPOINT, LOGOUT_ENDPOINT } from '../constants';
import { request } from '../request';
import {
  TRegistrationReqBody,
  TAuthResBody,
  TRegistrationResErrBody,
  TLoginReqBody,
  TLoginResErrBody,
  TDetailResBody,
  TUserResBody,
} from '../types/authTypes';

class AuthService {
  registraion = async (data: TRegistrationReqBody) => {
    return await request<TAuthResBody, TRegistrationResErrBody, TRegistrationReqBody>({
      url: REGISTRATION_ENDPOINT,
      method: 'POST',
      data,
    });


  };

  login = async (data: TLoginReqBody) => {
    return  await request<TAuthResBody, TLoginResErrBody, TLoginReqBody>({
      url: LOGIN_ENDPOINT,
      method: 'POST',
      data,
      withCredentials: false,
    });


  };

  logout = async () => {
   return  await request<TDetailResBody, TDetailResBody>({
      url: LOGOUT_ENDPOINT,
      method: 'POST',
      withCredentials: false,
    });
  };

  user = async () => {
    return  await request<TUserResBody, TDetailResBody>({
      url: USER_ENDPOINT,
      method: 'GET',
      headers:{
        authorization: `Bearer ${Cookies.get('token')}`,
      }
    });
  };
}

export default new AuthService();
