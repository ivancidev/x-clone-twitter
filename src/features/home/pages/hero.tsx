import { Feed } from '../../posts';
import { RightSidebar } from '../components/right-sidebar';
import '../styles/scrollbar.css';

export const Hero = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-twitter-dark">
      <div className=" overflow-y-auto scrollbar-hide">
        <Feed />
      </div>
      <div className="hidden lg:flex h-full">
        <RightSidebar />
      </div>
    </div>
  );
};
