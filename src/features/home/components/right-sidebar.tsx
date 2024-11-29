import { FollowSuggestions, SearchBox, TrendsCard } from '../../../common';
import { PremiumCard } from './cards/premium-card';

export const RightSidebar = () => {
  return (
    <aside className="flex flex-col w-[500px] px-4 py-8 space-y-4 bg-twitter-dark">
      <div className="mr-24">
        <SearchBox />
      </div>
      <div className="mr-24">
        <PremiumCard />
      </div>
      <div className="mr-24">
        <TrendsCard />
      </div>
      <div className="mr-24">
        <FollowSuggestions />
      </div>
    </aside>
  );
};
