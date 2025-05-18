import { FaRegStar, FaStar } from 'react-icons/fa';

const renderStars = (count: number) => {
  return Array.from({ length: 5 }, (_, i) =>
    i < count ? (
      <FaStar key={i} className="text-yellow-400" />
    ) : (
      <FaRegStar key={i} className="text-yellow-400" />
    ),
  );
};
export default renderStars;
