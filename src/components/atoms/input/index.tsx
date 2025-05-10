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
}) => {
  return (
    <div>
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={twMerge(
          'border-primary/50 text-dark focus:ring-primary/50 mt-3 w-full rounded-lg border p-3 shadow-xl',
          'outline-none focus:border-none focus:ring-2 md:mt-5 md:p-4',
          className,
        )}
      />
      {error && touched && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
