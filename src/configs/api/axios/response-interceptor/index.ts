import { toast } from 'react-toastify';
import type { AxiosInstance } from 'axios';

export function SetupResponseInterceptor(api: AxiosInstance) {
  api.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;

      switch (status) {
        case 401:
          toast.error('Session expired. Please login again.');
          break;
        case 403:
          toast.warning('You are not authorized to perform this action.');
          break;
        case 500:
          toast.error('Internal server error. Please try again later.');
          break;
        default:
          toast.error(error.message || 'An error occurred.');
      }

      return Promise.reject(error);
    },
  );
}
