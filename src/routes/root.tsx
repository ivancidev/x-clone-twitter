import { Outlet } from 'react-router-dom';
import { Sidebar } from '../layouts';

export const Root = () => {
  return (
    <div className="flex h-screen">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};
