import { CiLocationOn, CiUser } from 'react-icons/ci';
import { FaFacebookF, FaHome, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { PiHouseLineDuotone } from 'react-icons/pi';
export const LINK_PAGES: { link: string; label: string }[] = [
  { link: `/home`, label: `Home` },
  { link: `/blog`, label: `Blog` },
  { link: `/pages`, label: `Pages` },
  { link: `/contact`, label: `Contact` },
];

export const FT_HEADERS: {
  title: string;
  sub: string;
  href: string;
  social?: {
    icon: React.ReactNode;
    href: string;
  }[];
}[] = [
  {
    title: 'Too Free Customer Care',
    sub: '(+84)123456789',
    href: 'tel:+84123456789',
  },
  {
    title: 'Need live support',
    sub: 'support@gmail.com',
    href: 'mailto:support@gmail.com',
  },
  {
    title: 'Follow us on social media',
    sub: '',
    href: '#',
    social: [
      { icon: <FaFacebookF />, href: 'https://www.facebook.com' },
      { icon: <FaTwitter />, href: 'https://www.twitter.com' },
      { icon: <LuInstagram />, href: 'https://www.instagram.com' },
      { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com' },
    ],
  },
];

export const DATA_MENU_ADMIN: {
  id: number;
  name: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 0,
    name: 'Dashboard',
    href: '/admin',
    icon: <FaHome />,
  },
  {
    id: 1,
    name: 'User Management',
    href: '/admin/user-management',
    icon: <CiUser />,
  },
  {
    id: 2,
    name: 'Location Management',
    href: '/admin/location-management',
    icon: <CiLocationOn />,
  },
  {
    id: 3,
    name: 'Room Management',
    href: '/admin/room-management',
    icon: <PiHouseLineDuotone />,
  },
];
