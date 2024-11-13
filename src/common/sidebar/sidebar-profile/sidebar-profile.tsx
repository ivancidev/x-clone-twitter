import { Link } from 'react-router-dom';

interface SidebarProfileProps {
  name: string;
  avatarUrl: string;
  to: string;
}
export const SidebarProfile = ({
  name,
  avatarUrl,
  to,
}: SidebarProfileProps) => {
  return (
    <Link to={to} className="flex items-center w-52">
      <img
        className="object-cover mx-2 rounded-full h-9 w-9"
        src={avatarUrl}
        alt="avatar"
      />
      <span className='mx-2 font-medium text-gray-800 dark:text-gray-200'>
        {name}
      </span>
    </Link>
  );
};
