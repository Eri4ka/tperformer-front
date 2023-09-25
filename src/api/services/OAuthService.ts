import { request } from '../request';
import { OAuthCallbackBody } from '../types/OAuthTypes';

class OAuthService {
  login = async ({ service, query }: OAuthCallbackBody) => {
    return await request({
      url: `api/auth/${service}/login/callback${query}`,
      method: 'GET',
    });

  };
}

export default new OAuthService();
