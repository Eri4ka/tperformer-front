import { request } from '../request';
import { OAuthCallbackBody } from '../types/OAuthTypes';

class OAuthService {
  login = async ({ service, query }: OAuthCallbackBody) => {
    const response = await request({
      url: `api/auth/${service}/login/callback${query}`,
      method: 'GET',
      withCredentials: true,
    });

    return response;
  };
}

export default new OAuthService();
