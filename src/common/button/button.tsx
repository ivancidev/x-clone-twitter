interface ButtonProps {
  label: string;
  onClick: () => void;
  isDesabled?: boolean;
  variant?: 'primary' | 'secondary';
}
export const Button = ({
  label,
  onClick,
  isDesabled = false,
  variant = 'primary',
}: ButtonProps) => {
  const variantClasses = variant === 'primary' ? 'px-20 py-2' : 'px-6 py-1';
  return (
    <button
      onClick={onClick}
      disabled={isDesabled}
      className={`ml-4 mt-2 ${variantClasses} font-semibold bg-slate-50 rounded-3xl hover:bg-slate-200 text-black
      ${isDesabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      `}
    >
      {label}
    </button>
  );
};
