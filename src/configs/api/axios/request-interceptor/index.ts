import type { AxiosInstance } from 'axios';
import { getAccessTokenLocal, getUser } from '../../local-service';

export function SetupRequestInterceptor(api: AxiosInstance) {
  api.interceptors.request.use(async (config) => {
    try {
      config.url = `${api.defaults.baseURL}${config.url}`;

      const accessToken = await getAccessTokenLocal();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      const user = await getUser();
      if (user) {
        config.headers['user'] = `${user}`;
      }
    } catch (error) {
      console.error('Request Interceptor Error:', error);
    }

    return config;
  });
}
