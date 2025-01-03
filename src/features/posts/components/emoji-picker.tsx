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
    <div className="cursor-pointer relative">
      <span
        onClick={(event) => {
          event.stopPropagation();
          setShowEmoji((prev) => !prev);
        }}
      >
        <EmojiIcon />
      </span>
      {showEmoji && (
        <div className="absolute z-10" ref={emojiPickerRef}>
          <EmojiPicker onEmojiClick={handleEmojiClick} theme={Theme.DARK} />
        </div>
      )}
    </div>
  );
};
