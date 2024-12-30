import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  to: string;
  path: string;
  onClick: () => void;
}

export const SidebarItem = ({
  icon,
  label,
  to,
  path,
  onClick,
}: SidebarItemProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-center gap-4 rounded-lg lg:w-52 lg:justify-start px-4 py-3 mt-2 text-white transition-colors duration-300 transform lg:rounded-full 
                  ${path === to ? 'font-semibold' : 'hover:bg-gray-900 hover:text-gray-700 dark:hover:text-gray-200'}`}
    >
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="font-interRegular28 text-lg hidden lg:block">
        {label}
      </span>
    </Link>
  );
};
