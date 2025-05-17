import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';
import { TypeUpdateUser } from '@/helper/type/type-user';

export const updateUser = async (data: TypeUpdateUser, id: number) => {
  const response = await api.put(`${ENDPOINT.USER}/${id}`, data);
  return response.data.metaData;
};
