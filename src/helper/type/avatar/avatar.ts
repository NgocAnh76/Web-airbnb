export interface AvatarCustomNameProps {
  name: string;
  defaultSize?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
  userId?: number | string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  name?: string;
  textColor?: string;
  bgColor?: string;
  userId?: number | string;
}
