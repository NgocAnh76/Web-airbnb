import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
interface ButtonProps {
  href: string;
  children?: string | React.ReactNode;
  className?: string;
}
export const ButtonClient = ({
  href,
  children,
  className = '',
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'smooth-hover rounded-md border-2 border-white p-5',
        className,
      )}
    >
      {children}
    </Link>
  );
};

interface SocialButtonProps {
  icon: React.ElementType;
  label: string;
  color: string;
  className?: string;
}
export const SocialButton = ({
  icon: Icon,
  label,
  color,
  className,
}: SocialButtonProps) => (
  <button
    className={twMerge(
      `mt-5 flex w-full flex-1 cursor-pointer items-center justify-center rounded-xl border-2 py-3 transition-all duration-300 ease-linear md:w-auto lg:py-5`,
      color == 'primary' &&
        'text-primary hover:bg-primary focus:bg-primary bg-white hover:text-white focus:text-white',
      color == 'text-red-500' &&
        'bg-white text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white',
      className,
    )}
  >
    <Icon className="mr-2" />
    {label}
  </button>
);

interface ButtonCustomProps {
  label: string;
  className?: string;
}
export const ButtonCustom = ({
  label,
  className,
  ...rest
}: ButtonCustomProps) => {
  return (
    <button
      className={twMerge(
        'bg-primary px-7 py-5 text-sm text-white md:text-base',
        'border-primary cursor-pointer rounded-lg border-2 shadow-md',
        'hover:bg-secondary transition-all duration-300 ease-linear',
        'focus:bg-secondary hover:text-white focus:text-white',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
