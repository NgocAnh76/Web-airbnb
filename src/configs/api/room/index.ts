import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';
import { RoomForms } from '@/helper/type/room';

export const getRoomByLocationId = async (locationId: number) => {
  const response = await api.get(
    `${ENDPOINT.ROOM.GET_BY_LOCATION_ID}/${locationId}`,
  );
  return response.data.metaData;
};

export const getRoomById = async (roomId: number) => {
  const response = await api.get(`${ENDPOINT.ROOM.GET}/${roomId}`);
  return response.data.metaData;
};

export const getRoom = async () => {
  const response = await api.get(ENDPOINT.ROOM.GET);
  return response.data.metaData;
};

export const deleteRoom = async (roomId: number) => {
  const response = await api.delete(`${ENDPOINT.ROOM.GET}/${roomId}`);
  return response.data.metaData;
};

export const addRoom = async (roomData: RoomForms) => {
  const response = await api.post(ENDPOINT.ROOM.GET, roomData);
  return response.data.metaData;
};

export const updateRoom = async (roomData: RoomForms, roomId: number) => {
  const response = await api.put(`${ENDPOINT.ROOM.GET}/${roomId}`, roomData);
  return response.data.metaData;
};
