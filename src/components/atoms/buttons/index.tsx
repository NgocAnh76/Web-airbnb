import { twMerge } from "tailwind-merge"
import Link from 'next/link';
interface ButtonProps {
    href: string;
    children: string;
    className?: string;
}
export const ButtonClient = ({ href, children, className = "" }: ButtonProps) => {
    return (
      <Link
        href={href}
        className={twMerge(
          "border-2 border-white rounded-md smooth-hover p-5",
          className
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
    ...rest
  }: SocialButtonProps) => (
    <button
      className={twMerge(
        `w-full md:w-auto  cursor-pointer mt-5 py-3 
        lg:py-5 border-2 rounded-xl transition-all duration-300 ease-linear 
        flex flex-1 items-center justify-center`,
        color == "primary" &&
          "bg-white text-primary hover:bg-primary focus:bg-primary hover:text-white focus:text-white",
        color == "text-red-500" &&
          "bg-white text-red-500 hover:bg-red-500 hover:text-white focus:text-white focus:bg-red-500"
      )}
    >
      <Icon className="mr-2" />
      {label}
    </button>
  );

  interface ButtonCustomProps {
    label: string;
    color: string;
    className?: string;
  }
  export const ButtonCustom = ({ label, color, className, ...rest }: ButtonCustomProps) => {
    return (
      <button
        className={twMerge(
          "px-7 py-5 text-sm md:text-base bg-primary text-white",
          " cursor-pointer shadow-md rounded-lg border-2 border-primary  ",
          "transition-all duration-300 ease-linear hover:bg-secondary",
          " hover:text-white focus:bg-secondary focus:text-white",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...rest}
      >
        {label}
      </button>
    );
  };