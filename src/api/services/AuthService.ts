
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
    const response = await request<TAuthResBody, TRegistrationResErrBody, TRegistrationReqBody>({
      url: REGISTRATION_ENDPOINT,
      method: 'POST',
      data,
    });

    return response;
  };

  login = async (data: TLoginReqBody) => {
    const response = await request<TAuthResBody, TLoginResErrBody, TLoginReqBody>({
      url: LOGIN_ENDPOINT,
      method: 'POST',
      data,
      withCredentials: false,
    });

    return response;
  };

  logout = async () => {
    await request<TDetailResBody, TDetailResBody>({
      url: LOGOUT_ENDPOINT,
      method: 'POST',
      withCredentials: false,
    });
  };

  user = async () => {
    const response = await request<TUserResBody, TDetailResBody>({
      url: USER_ENDPOINT,
      method: 'GET',
    });
    return response;
  };
}

export default new AuthService();
