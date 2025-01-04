import { ProgressCircleRoot } from '@chakra-ui/react';
import {
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
import { PollData } from '../interfaces/poll';
import { PollModal } from '../modals/poll-modal';
import { EmojiPickerComponent } from './emoji-picker';
import { fetchGifs } from '../services/fetch-gifs';
import {
  createPost,
  uploadImagesToCloudinary,
} from '../services/cloudinary-service';

const maxCharacters = 200;
const maxImages = 4;

export const PostForm = () => {
  const [text, setText] = useState<string>('');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);
  const [isGifModalOpen, setGifModalOpen] = useState<boolean>(false);
  const [isPollModalOpen, setPollModalOpen] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleEmojiClick = (emojiObject: any) => {
    setText((prev) => prev + emojiObject.emoji);
  };

  const handlePollSubmit = (data: PollData) => {
    console.log(data);
    setPollModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

      setImagePreviews((prevPreviews) =>
        [...prevPreviews, ...newPreviews].slice(0, maxImages),
      );

      setImagesToUpload((prevFiles) =>
        [...prevFiles, ...newFiles].slice(0, maxImages),
      );
    }
  };

  const handleRemoveImage = (index: number) => {
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index),
    );

    setImagesToUpload((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleGifClick = (
    gif: any,
    e: React.SyntheticEvent<HTMLElement, Event>,
  ) => {
    e.preventDefault();

    if (imagePreviews.length < maxImages) {
      setImagePreviews((prev) => [...prev, gif.images.fixed_height.url]);

      setImagesToUpload((prev) => [...prev, gif.images.fixed_height.url]);
    }
    setGifModalOpen(false);
  };

  const handlePostSubmit = async () => {
    try {
      const uploaderUrls = await uploadImagesToCloudinary(imagesToUpload);
      await createPost(text, uploaderUrls);
      setText('');
      setImagePreviews([]);
      setImagesToUpload([]);
    } catch (error) {
      console.error(error);
    }
  };

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
            <span
              className="cursor-pointer"
              onClick={() => setPollModalOpen(true)}
            >
              <PollIcon />
            </span>
            <EmojiPickerComponent
              showEmoji={showEmojiPicker}
              setShowEmoji={setShowEmojiPicker}
              handleEmojiClick={handleEmojiClick}
            />
            <ScheduleIcon />
            <LocationIcon />
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
              onClick={handlePostSubmit}
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
      <PollModal
        isOpen={isPollModalOpen}
        onClose={() => setPollModalOpen(false)}
        onSubmit={handlePollSubmit}
      />
    </section>
  );
};
