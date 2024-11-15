import { RightSidebar } from './features';
import { Sidebar } from './layouts';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-1 justify-center items-center ">
        Publicaciones
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
