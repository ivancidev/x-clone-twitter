import CenteredTabs from '../../../layouts/navbar/tab-ui';
import { Feed } from '../../posts';
import { PostForm } from '../../posts/components/post-form';
import { RightSidebar } from '../components/right-sidebar';
import '../styles/scrollbar.css';

export const Hero = () => {
  return (
    <div className="flex h-screen bg-twitter-dark overflow-hidden">
      <div className="flex flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex-1 border-[1px] border-gray-700">
          <CenteredTabs />
          <PostForm />
          <Feed />
        </div>
        <div className="hidden lg:flex w-[450px] flex-shrink-0 sticky top-0">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};
