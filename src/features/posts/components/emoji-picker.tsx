import { useEffect, useRef } from 'react';
import { EmojiIcon } from '../icons';
import EmojiPicker, { Theme } from 'emoji-picker-react';

interface EmojiPickerProp {
  handleEmojiClick: (emojiOject: any) => void;
  showEmoji: boolean;
  setShowEmoji: React.Dispatch<React.SetStateAction<boolean>>;
}
export const EmojiPickerComponent = ({
  showEmoji,
  setShowEmoji,
  handleEmojiClick,
}: EmojiPickerProp) => {
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target as Node)
    ) {
      setShowEmoji(false);
    }
  };

  useEffect(() => {
    if (showEmoji) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showEmoji]);

  return (
    <div className="flex justify-center cursor-pointer relative">
      <span
        onClick={(event) => {
          event.stopPropagation();
          setShowEmoji((prev) => !prev);
        }}
      >
        <EmojiIcon />
      </span>
      {showEmoji && (
        <div
          ref={emojiPickerRef}
          className="absolute top-full mt-2 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
             w-60 sm:w-72 max-h-80 border border-gray-300 dark:border-gray-700"
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            theme={Theme.DARK}
            lazyLoadEmojis={true}
          />
        </div>
      )}
    </div>
  );
};
