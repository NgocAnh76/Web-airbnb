import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';

export const AddBooking = async (data: any) => {
  const response = await api.post(ENDPOINT.BOOKING, data);
  return response.data.metaData;
};
export const GetBooking = async (data: any) => {
  const response = await api.get(ENDPOINT.BOOKING, data);
  return response.data.metaData;
};
export const GetBookingById = async (id: string) => {
  const response = await api.get(`${ENDPOINT.BOOKING}/${id}`);
  return response.data.metaData;
};
export const UpdateBooking = async (id: string, data: any) => {
  const response = await api.put(`${ENDPOINT.BOOKING}/${id}`, data);
  return response.data.metaData;
};
export const DeleteBooking = async (id: string) => {
  const response = await api.delete(`${ENDPOINT.BOOKING}/${id}`);
  return response.data.metaData;
};
