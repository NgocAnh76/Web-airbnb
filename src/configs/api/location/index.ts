import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';

export const getForeignLocations = async (nationId: number) => {
  const response = await api.get(
    `${ENDPOINT.LOCATION.GET_NOT_NATION}/${nationId}`,
  );
  return response.data.metaData;
};

export const getVNLocation = async (nationId: number) => {
  const response = await api.get(`${ENDPOINT.LOCATION.GET_INFO}/${nationId}`);
  return response.data.metaData;
};

export const getLocationInfo = async (locationId: number) => {
  const response = await api.get(`${ENDPOINT.LOCATION.GET_INFO}/${locationId}`);
  return response.data.metaData;
};
