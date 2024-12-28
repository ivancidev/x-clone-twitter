interface ActionProp {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
}
export const Action = ({ icon, label, onClick }: ActionProp) => {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="hidden lg:block">
        {label}
      </span>
    </button>
  );
};
