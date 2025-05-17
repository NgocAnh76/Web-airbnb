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
