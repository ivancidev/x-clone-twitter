import { Outlet } from 'react-router-dom';
import { Sidebar } from '../layouts';

export const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-1 justify-center items-center ">
        Publicaciones
      </main>
      <Outlet />
    </div>
  );
};
