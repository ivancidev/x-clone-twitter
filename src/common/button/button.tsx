interface ButtonProps {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="ml-4 mt-2 px-20 py-2 text-white bg-blue-500 rounded-3xl ed- hover:bg-blue-600"
    >
      {label}
    </button>
  );
};
