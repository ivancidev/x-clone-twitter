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
      className={`flex items-center w-52 px-4 py-2 mt-2 text-white transition-colors duration-300 transform rounded-md 
                  ${isActive ? 'bg-gray-600' : 'hover:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-200'}`}
    >
      <div className="mr-4">{icon}</div>{' '}
      <span className="font-interRegular28 text-lg">{label}</span>
    </Link>
  );
};
