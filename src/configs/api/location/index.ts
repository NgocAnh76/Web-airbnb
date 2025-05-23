import { ENDPOINT } from '@/helper/endpoint';
import { LocationForms } from '@/helper/type/location';
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

export const getLocationById = async (locationId: number) => {
  const response = await api.get(`${ENDPOINT.LOCATION.GET}/${locationId}`);
  return response.data.metaData;
};

export const getLocation = async () => {
  const response = await api.get(ENDPOINT.LOCATION.GET);
  return response.data.metaData;
};

export const deleteLocation = async (locationId: number) => {
  const response = await api.delete(`${ENDPOINT.LOCATION.GET}/${locationId}`);
  return response.data.metaData;
};

export const addLocation = async (data: LocationForms) => {
  const response = await api.post(ENDPOINT.LOCATION.GET, data);
  return response.data.metaData;
};

export const updateLocation = async (
  data: LocationForms,
  locationId: number,
) => {
  const response = await api.put(
    `${ENDPOINT.LOCATION.GET}/${locationId}`,
    data,
  );
  return response.data.metaData;
};
