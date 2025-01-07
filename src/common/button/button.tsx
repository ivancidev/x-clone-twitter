interface ButtonProps {
  label: string | React.ReactNode;
  onClick: () => void;
  isDesabled?: boolean;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}
export const Button = ({
  label,
  onClick,
  isDesabled = false,
  variant = 'primary',
  isLoading = false,
}: ButtonProps) => {
  const variantClasses = variant === 'primary' ? 'px-20 py-2' : 'px-6 py-1';
  const loadingClasses = isLoading
    ? 'animate-pulse'
    : 'bg-slate-50 hover:bg-slate-200';
  return (
    <button
      onClick={onClick}
      disabled={isDesabled}
      className={`${variantClasses} ${loadingClasses} font-semibold rounded-3xl text-black
      ${isDesabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      `}
    >
      {label}
    </button>
  );
};
