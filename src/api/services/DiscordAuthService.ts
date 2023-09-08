import { OAUTH_ENDPOINT } from '../constants';
import { request } from '../request';
import { TDiscordCallbackBody } from '../types/discordAuthTypes';

class DiscordAuthService {
  login = async (data: TDiscordCallbackBody) => {
    const response = await request({
      url: OAUTH_ENDPOINT,
      method: 'POST',
      data,
      withCredentials: true,
    });

    return response;
  };
}

export default new DiscordAuthService();
