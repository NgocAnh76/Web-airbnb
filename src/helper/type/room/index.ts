export interface RoomCardProps {
  data: {
    image: string;
    room_name: string;
    address: string;
    living_room: string;
    bedroom: string;
    bed: string;
    bathroom: string;
    kitchen: boolean;
    washing_machine: boolean;
    air_conditioner: boolean;
    television: boolean;
    wifi: boolean;
    iron: boolean;
    parking: boolean;
    pool: boolean;
    price: number;
    room_id: number;
    locations: {
      province: string;
    };
  }[];
}

export interface RoomInfo {
  room_id: number;
  room_name: string;
  price: number;
  address: string;
  image: string;
  living_room: string;
  bedroom: string;
  bed: string;
  bathroom: string;
  kitchen: boolean;
  washing_machine: boolean;
  air_conditioner: boolean;
  television: boolean;
  wifi: boolean;
  iron: boolean;
  parking: boolean;
  pool: boolean;
  description: string;
  locations: {
    province: string;
  };
}

export interface RoomForms {
  room_id: number;
  room_name: string;
  living_room: string;
  bedroom: string;
  bed: string;
  bathroom: string;
  description: string;
  price: number;
  washing_machine: boolean;
  iron: boolean;
  television: boolean;
  air_conditioner: boolean;
  wifi: boolean;
  kitchen: boolean;
  parking: boolean;
  pool: boolean;
  image: string;
  location_id: number;
  address: string;
}
