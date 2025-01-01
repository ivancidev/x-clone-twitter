export const FollowSuggestions = () => {
  const suggestions = [
    {
      name: 'Jane Doe',
      handle: '@janedoe',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'John Smith',
      handle: '@johnsmith',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
  ];

  return (
    <div className="p-4 bg-twitter-dark rounded-2xl border-gray-700 border-[1px]">
      <h3 className="font-bold text-lg mb-2 text-white font-interRegular28">
        Who to follow
      </h3>
      {suggestions.map((suggestion, index) => (
        <div key={index} className="flex items-center mb-2">
          <img
            src={suggestion.avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-white font-interRegular18">
              {suggestion.name}
            </p>
            <p className="text-sm text-gray-500">{suggestion.handle}</p>
          </div>
          <button className="ml-auto px-4 py-1 bg-white text-black rounded-full font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};
