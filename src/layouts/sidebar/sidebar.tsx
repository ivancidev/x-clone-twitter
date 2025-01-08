import { useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import {
  IconHome,
  IconSearch,
  IconBrookMarks,
  IconMessage,
  IconNotification,
  SidebarItem,
  IconLists,
  IconProfile,
  IconGroups,
  SidebarProfile,
  Button,
} from '../../common';
import { AddPostIcon } from '../../common/icons/add-post-icon';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const [path, setPath] = useState(window.location.pathname);

  const handlePath = (path: string) => {
    setPath(path);
  };
  return (
    <aside className="flex flex-col h-screen px-4 py-2 overflow-y-auto bg-twitter-dark w-20 lg:w-[380px] lg:px-24 relative">
      <a href="#">
        <img className="w-14" src={Logo} alt="" />
      </a>
      <div className="flex flex-col justify-around items-center h-full">
        <nav className="space-y-2">
          <SidebarItem
            icon={<IconHome />}
            label="Home"
            to="/"
            onClick={() => handlePath('/')}
            path={path}
          />
          <SidebarItem
            icon={<IconSearch width={20} height={20} />}
            label="Explore"
            to="/explore"
            onClick={() => handlePath('/explore')}
            path={path}
          />
          <SidebarItem
            icon={<IconNotification />}
            label="Notifications"
            to="/notifications"
            onClick={() => handlePath('/notifications')}
            path={path}
          />
          <SidebarItem
            icon={<IconMessage />}
            label="Messages"
            to="/messages"
            onClick={() => handlePath('/messages')}
            path={path}
          />
          <SidebarItem
            icon={<IconBrookMarks />}
            label="BrookMarks"
            to="/brookmarks"
            onClick={() => handlePath('/brookmarks')}
            path={path}
          />
          <SidebarItem
            icon={<IconLists />}
            label="Lists"
            to="/lists"
            onClick={() => handlePath('/lists')}
            path={path}
          />
          <SidebarItem
            icon={<IconProfile />}
            label="Profile"
            to="/profile"
            onClick={() => handlePath('/profile')}
            path={path}
          />
          <SidebarItem
            icon={<IconGroups />}
            label="More"
            to="/groups"
            onClick={() => handlePath('/groups')}
            path={path}
          />
          <Link
            to="/post"
            className="flex justify-center cursor-pointer"
          >
            <div className="block lg:hidden">
              <AddPostIcon />
            </div>
            <div className="hidden lg:block">
              <Button label="Post" onClick={() => console.log('Post')} />
            </div>
          </Link>
        </nav>
        <SidebarProfile
          name="John Doe"
          nickname="johndoe"
          avatarUrl="https://randomuser.me/api/portraits/men/75.jpg"
          to="/profile"
        />
      </div>
    </aside>
  );
};
