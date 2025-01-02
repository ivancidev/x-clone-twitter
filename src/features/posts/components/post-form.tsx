import { ProgressCircleRoot } from '@chakra-ui/react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from '../icons';
import { Button } from '@/common';
import { useState } from 'react';
import { ProgressCircleRing } from '@/components/ui/progress-circle';
import { TexTarea } from './textarea';
import { GifsModal } from '../modals/gifs-modal';
import { CarouselPreview } from './carousel';

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
const maxCharacters = 200;
const maxImages = 4;

export const PostForm = () => {
  const [text, setText] = useState<string>('');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isGifModalOpen, setGifModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file),
      );

      setImagePreviews((prevPreviews) =>
        [...prevPreviews, ...newFiles].slice(0, maxImages),
      );
    }
  };

  const handleRemoveImage = (index: number) => {
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index),
    );
  };

  const handleGifClick = (
    gif: any,
    e: React.SyntheticEvent<HTMLElement, Event>,
  ) => {
    e.preventDefault();

    if (imagePreviews.length < maxImages) {
      setImagePreviews((prev) => [...prev, gif.images.fixed_height.url]);
    }
    setGifModalOpen(false);
  };

  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

  const charPercentage = Math.min((text.length / maxCharacters) * 100, 100);
  return (
    <section className="flex p-4 space-x-4">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User Avatar"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col w-full">
        <TexTarea text={text} handleChange={handleChange} />
        <CarouselPreview
          imagePreviews={imagePreviews}
          handleRemoveImage={handleRemoveImage}
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-4">
            <span>
              <label htmlFor="file-upload" className="cursor-pointer">
                <MediaIcon />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setGifModalOpen(true)}
            >
              <GifIcon />
            </span>
            <span className="cursor-pointer">
              <PollIcon />
            </span>
            <span className="cursor-pointer">
              <EmojiIcon />
            </span>
            <span className="cursor-pointer">
              <ScheduleIcon />
            </span>
            <span className="cursor-pointer">
              <LocationIcon />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {text.length > 0 && (
              <ProgressCircleRoot value={charPercentage} size="xs">
                <ProgressCircleRing
                  color={text.length > maxCharacters ? 'red.500' : 'blue.500'}
                />
              </ProgressCircleRoot>
            )}
            <Button
              label="Post"
              onClick={() => console.log('my post')}
              isDesabled={text.length === 0 || text.length > maxCharacters}
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <GifsModal
        open={isGifModalOpen}
        onClose={() => setGifModalOpen(false)}
        fetchGifs={fetchGifs}
        handleGifClick={handleGifClick}
      />
    </section>
  );
};
