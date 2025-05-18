import { TypeLoginRequest, TypeRegisterRequest } from '@/helper/type/type-auth';
import api from '../axios';
import { ENDPOINT } from '@/helper/endpoint';

export const register = async (data: TypeRegisterRequest) => {
  const response = await api.post(ENDPOINT.AUTH.REGISTER, data);
  return response.data;
};

export const ApiLogin = async (data: TypeLoginRequest) => {
  const response = await api.post(ENDPOINT.AUTH.LOGIN, data);
  return response.data;
};
