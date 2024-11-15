export const TrendsCard = () => {
  const trends = [
    { topic: '#ReactJS', tweets: '120K tweets' },
    { topic: '#JavaScript', tweets: '90K tweets' },
    { topic: '#WebDevelopment', tweets: '45K tweets' },
  ];

  return (
    <div className="p-4 bg-twitter-dark rounded-lg border-gray-700 border-[1px]">
      <h3 className="font-bold text-lg mb-2 text-white font-interRegular28">Tendencias para ti</h3>
      {trends.map((trend, index) => (
        <div key={index} className="mb-2">
          <p className="font-semibold text-white font-interRegular18">{trend.topic}</p>
          <p className="text-sm text-gray-500">{trend.tweets}</p>
        </div>
      ))}
    </div>
  );
};
