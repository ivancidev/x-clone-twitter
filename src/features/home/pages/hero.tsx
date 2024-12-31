import CenteredTabs from '../../../layouts/navbar/tab-ui';
import { Feed } from '../../posts';
import { PostForm } from '../../posts/components/post-form';
import { RightSidebar } from '../components/right-sidebar';
import '../styles/scrollbar.css';

export const Hero = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-twitter-dark">
      <div className="overflow-y-auto scrollbar-hide border-[1px] border-gray-700">
        <CenteredTabs />
        <PostForm />
        <Feed />
      </div>
      <div className="hidden lg:flex h-full">
        <RightSidebar />
      </div>
    </div>
  );
};
