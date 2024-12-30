interface ButtonProps {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="ml-4 mt-2 px-20 py-2 font-semibold bg-slate-50 rounded-3xl ed- hover:bg-slate-200 text-black"
    >
      {label}
    </button>
  );
};
