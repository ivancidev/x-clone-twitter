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
export const Sidebar = () => {
  const [path, setPath] = useState(window.location.pathname);

  const handlePath = (path: string) => {
    setPath(path);
  };
  return (
    <aside className="flex flex-col w-96 h-screen px-36 py-8 overflow-y-auto bg-twitter-dark">
      <a href="#">
        <img className="w-14" src={Logo} alt="" />
      </a>
      <div className="flex flex-col justify-between flex-1">
        <nav>
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
          <Button label="Post" onClick={() => console.log('Post')} />
        </nav>
        <SidebarProfile
          name="John Doe"
          nickname="johndoe"
          avatarUrl="https://i.pravatar.cc/150?img=68"
          to="/profile"
        />
      </div>
    </aside>
  );
};
