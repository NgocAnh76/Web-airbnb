import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';
import { TypeUpdateUser } from '@/helper/type/type-user';
import { getAccessTokenLocal } from '../local-service';

export const updateUser = async (
  data: TypeUpdateUser | FormData,
  id: number,
) => {
  const response = await api.put(`${ENDPOINT.USER}/${id}`, data, {
    headers: {
      'Content-Type':
        data instanceof FormData ? 'multipart/form-data' : 'application/json',
    },
  });
  return response.data.metaData;
};

export const getUser = async () => {
  const accessToken = getAccessTokenLocal();
  if (!accessToken) {
    throw new Error('Please login again');
  }
  const response = await api.get(ENDPOINT.USER, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.metaData;
};

export const getUserById = async (id: number) => {
  const response = await api.get(`${ENDPOINT.USER}/${id}`);
  return response.data.metaData;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`${ENDPOINT.USER}/${id}`);
  return response.data.metaData;
};
