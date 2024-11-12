import Logo from '../../assets/icons/logo.svg';
import {
  IconHome,
  IconSearch,
  IconBrookMarks,
  IconMessage,
  IconNotification,
  SidebarItem,
  IconLists,
} from '../../common';
export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#">
        <img className="w-14" src={Logo} alt="" />
      </a>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <SidebarItem icon={<IconHome />} label="Home" to="/" isActive />
          <SidebarItem icon={<IconSearch />} label="Explore" to="/explore" />
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
        </nav>
        <a href="#" className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
            John Doe
          </span>
        </a>
      </div>
    </aside>
  );
};
