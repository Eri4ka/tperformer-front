import {LOGIN_ENDPOINT, LOGOUT_ENDPOINT, REGISTRATION_ENDPOINT, USER_ENDPOINT} from '../constants';
import {request} from '../request';
import {
  TAuthResBody,
  TErrorResBody,
  TLoginReqBody,
  TLoginResErrBody,
  TRegistrationReqBody,
  TRegistrationResErrBody,
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
      headers:{}
    });


  };

  logout = async () => {
   return  await request<TErrorResBody, TErrorResBody>({
      url: LOGOUT_ENDPOINT,
      method: 'POST',
      withCredentials: false,
    });
  };

  user = async () => {
    return  await request<TUserResBody, TErrorResBody>({
      url: USER_ENDPOINT,
      method: 'GET',
    });
  };
}

export default new AuthService();
