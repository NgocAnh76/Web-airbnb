import { FaFacebookF, FaLinkedinIn, FaRegUserCircle, FaTwitter } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
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
      title: "Too Free Customer Care",
      sub: "(+84)123456789",
      href: "tel:+84123456789",
    },
    {
      title: "Need live support",
      sub: "support@gmail.com",
      href: "mailto:support@gmail.com",
    },
    {
      title: "Follow us on social media",
      sub: "",
      href: "#",
      social: [
        { icon: <FaFacebookF />, href: "https://www.facebook.com" },
        { icon: <FaTwitter />, href: "https://www.twitter.com" },
        { icon: <LuInstagram />, href: "https://www.instagram.com" },
        { icon: <FaLinkedinIn />, href: "https://www.linkedin.com" },
      ],
    },
  ];