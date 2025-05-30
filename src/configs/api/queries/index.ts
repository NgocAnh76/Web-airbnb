import { useQuery } from '@tanstack/react-query';
import { getComment } from '../comment';
import { getForeignLocations, getLocation, getVNLocation } from '../location';
import { getRoomById, getRoomByLocationId } from '../room';

//  location
export const useForeignLocations = (nationId: number) => {
  return useQuery({
    queryKey: ['foreign-locations', nationId],
    queryFn: () => getForeignLocations(nationId),
  });
};
export const useVNLocation = (nationId: number) => {
  return useQuery({
    queryKey: ['vn-locations', nationId],
    queryFn: () => getVNLocation(nationId),
  });
};

// room

export const useGetRoomByLocationId = (id: number) => {
  return useQuery({
    queryKey: ['room-by-location-id', id],
    queryFn: () => getRoomByLocationId(id),
  });
};

export const useGetLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: () => getLocation(),
  });
};

export const useGetRoomById = (id: number) => {
  return useQuery({
    queryKey: ['room-by-id', id],
    queryFn: () => getRoomById(id),
  });
};

// comment

export const useGetComment = (roomId: number) => {
  return useQuery({
    queryKey: ['comment', roomId],
    queryFn: () => getComment(roomId),
  });
};

// user
