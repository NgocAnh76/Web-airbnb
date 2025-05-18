import { ENDPOINT } from '@/helper/endpoint';
import api from '../axios';

export const getComment = async (roomId: number) => {
  const response = await api.get(`${ENDPOINT.COMMENT}/${roomId}`);

  return response.data.metaData;
};
