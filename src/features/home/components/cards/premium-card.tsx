import { Button } from '@/common';

export const PremiumCard = () => {
  return (
    <div className="p-4 bg-twitter-dark rounded-2xl border-gray-700 border-[1px]">
      <h3 className="font-bold text-lg text-white font-interRegular28">
        Try Premium for free today
      </h3>
      <p className="text-sm text-gray-600 font-interRegular18 mt-2 mb-1">
        Upgrade your experience with less ads, power tools, and more with
        Premium.
      </p>
      <Button label="Start free" onClick={() => console.log('Post')} />
    </div>
  );
};
