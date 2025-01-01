import { ProgressCircleRoot, Stack, Textarea } from '@chakra-ui/react';
import {
  CloseIcon,
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

const maxCharacters = 200;
const maxImages = 4;

export const PostForm = () => {
  const [text, setText] = useState<string>('');
  const [, setFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

      setFiles((prevFiles) => {
        const combinedFiles = [...prevFiles, ...newFiles];
        return combinedFiles.slice(0, maxImages);
      });

      setImagePreviews((prevPreviews) => {
        const combinedPreviews = [...prevPreviews, ...newPreviews];
        return combinedPreviews.slice(0, maxImages);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index),
    );
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
        <Stack>
          <Textarea
            value={text}
            onChange={handleChange}
            placeholder="What is happening?"
            variant="outline"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 400,
              resize: 'none',
              outline: 'none',
            }}
          />
        </Stack>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {imagePreviews.map((preview, index) => (
            <div className="relative w-full h-auto">
              <img
                key={index}
                src={preview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-lg"
              />
              <span
                className="absolute top-0 right-0 rounded-full border-none cursor-pointer"
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
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
            <span className="cursor-pointer">
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
    </section>
  );
};
