import { twMerge } from 'tailwind-merge';

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
  disabled?: boolean;
  accept?: string;
  min?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  error,
  touched,
  className,
  disabled,
  accept,
  min,
}) => {
  return (
    <div>
      {label && (
        <label className="text-base font-medium text-black">{label}</label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        accept={accept}
        min={min}
        className={twMerge(
          'mt-3 w-full rounded-lg border border-primary/50 p-3 text-sm text-dark shadow-md focus:ring-primary/50',
          'bg-white outline-none placeholder:text-sm focus:border-none focus:ring-2 md:mt-5 md:p-4',
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
      />
      {error && touched && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
