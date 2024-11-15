import { Link } from 'react-router-dom';

interface SidebarProfileProps {
  name: string;
  nickname: string;
  avatarUrl: string;
  to: string;
}
export const SidebarProfile = ({
  name,
  nickname,
  avatarUrl,
  to,
}: SidebarProfileProps) => {
  return (
    <Link to={to} className="flex items-center w-52">
      <img
        className="object-cover mx-2 rounded-full h-11 w-11"
        src={avatarUrl}
        alt="avatar"
      />
      <div className='flex flex-col'>
        <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="mx-2 font-medium text-sm text-gray-400 dark:text-gray-200">
          @{nickname}
        </span>
      </div>
    </Link>
  );
};
