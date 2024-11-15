import { IconSearch } from '../../common/icons';

export const SearchBox = () => {
  return (
    <div className="relative mb-4">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800">
        <IconSearch width={15} height={15} />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-400 focus:outline-none"
      />
    </div>
  );
};
