import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  to: string;
}
export const SidebarItem = ({
  icon,
  label,
  isActive = false,
  to,
}: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 ${isActive ? 'flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200' : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'}`}
    >
        {icon}
        <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};
