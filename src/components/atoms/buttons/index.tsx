'use client';

import Link from 'next/link';
import React from 'react';
import { GoPencil } from 'react-icons/go';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

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
        'smooth-hover rounded-md border border-white p-5',
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
      `mt-5 flex w-full flex-1 cursor-pointer items-center justify-center rounded-xl border py-3 transition-all duration-300 ease-linear md:w-auto lg:py-5`,
      color == 'primary' &&
        'bg-white text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white',
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
        'cursor-pointer rounded-lg border-2 border-primary shadow-md',
        'transition-all duration-300 ease-linear hover:bg-secondary',
        'hover:text-white focus:bg-secondary focus:text-white',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

type ActionButtonsProps = {
  id?: string | number;
  basePath?: string;
  onDelete?: () => void;
  isDeleting?: boolean;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({
  id,
  basePath,
  onDelete,
  isDeleting = false,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <Link
        href={`${basePath}/edit/${id}`}
        className={twMerge(
          'smooth-hover cursor-pointer rounded-md border p-1',
          'border-green-500 text-green-500 hover:bg-green-500 hover:text-white lg:text-lg',
        )}
      >
        <GoPencil />
      </Link>
      <button
        onClick={onDelete}
        disabled={isDeleting}
        className={twMerge(
          'smooth-hover cursor-pointer rounded-md border p-1',
          'border-red-500 text-red-500 hover:bg-red-500 hover:text-white lg:text-lg',
          isDeleting && 'cursor-not-allowed opacity-50',
        )}
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
};

export default ActionButtons;
