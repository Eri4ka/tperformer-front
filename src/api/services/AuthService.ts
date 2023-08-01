import { REGISTRATION_ENDPOINT, LOGIN_ENDPOINT, USER_ENDPOINT, LOGOUT_ENDPOINT } from '../constants';
import { authHeader } from '../helpers/authHeader';
import { request } from '../request';
import {
  TRegistrationReqBody,
  TAuthResBody,
  TRegistrationResErrBody,
  TLoginReqBody,
  TLoginResErrBody,
  TDetailResBody,
} from '../types/authTypes';

class AuthService {
  registraion = async (data: TRegistrationReqBody) => {
    const response = await request<TAuthResBody, TRegistrationResErrBody, TRegistrationReqBody>({
      url: REGISTRATION_ENDPOINT,
      method: 'POST',
      data,
    });

    if (response.key) {
      localStorage.setItem('token', JSON.stringify(response.key));
    }

    return response;
  };

  login = async (data: TLoginReqBody) => {
    const response = await request<TAuthResBody, TLoginResErrBody, TLoginReqBody>({
      url: LOGIN_ENDPOINT,
      method: 'POST',
      data,
    });

    if (response.key) {
      localStorage.setItem('token', JSON.stringify(response.key));
    }

    return response;
  };

  logout = async () => {
    const response = await request<TDetailResBody, TDetailResBody>({
      url: LOGOUT_ENDPOINT,
      method: 'POST',
      headers: authHeader(),
    });

    localStorage.removeItem('token');

    return response;
  };

  user = async () => {
    const response = await request({
      url: USER_ENDPOINT,
      method: 'GET',
      headers: authHeader(),
    });
    return response;
  };
}

export default new AuthService();
