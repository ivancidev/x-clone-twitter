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
  return (
    <aside className="flex flex-col w-96 h-screen px-36 py-8 overflow-y-auto bg-twitter-dark">
      <a href="#">
        <img className="w-14" src={Logo} alt="" />
      </a>
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <SidebarItem icon={<IconHome />} label="Home" to="/" isActive />
          <SidebarItem
            icon={<IconSearch width={20} height={20} />}
            label="Explore"
            to="/explore"
          />
          <SidebarItem
            icon={<IconNotification />}
            label="Notifications"
            to="/notifications"
          />
          <SidebarItem icon={<IconMessage />} label="Messages" to="/messages" />
          <SidebarItem
            icon={<IconBrookMarks />}
            label="BrookMarks"
            to="/brookmarks"
          />
          <SidebarItem icon={<IconLists />} label="Lists" to="/lists" />
          <SidebarItem icon={<IconProfile />} label="Profile" to="/profile" />
          <SidebarItem icon={<IconGroups />} label="More" to="/groups" />
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
