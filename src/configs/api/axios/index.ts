import axios from 'axios';
import { SetupRequestInterceptor } from './request-interceptor';
import { SetupResponseInterceptor } from './response-interceptor';
import { BASE_DOMAIN_API } from '@/components/constant/app.constant';

const api = axios.create({
  baseURL: BASE_DOMAIN_API,
  headers: {
    'content-Type': 'application/json',
  },
});

SetupRequestInterceptor(api);
SetupResponseInterceptor(api);

export default api;
