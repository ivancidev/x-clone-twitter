import { Stack, Textarea } from '@chakra-ui/react';
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from '../icons';
import { Button } from '@/common';

export const PostForm = () => {
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
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer">
              <MediaIcon />
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
            <GifIcon />
          </div>
          <Button
            label="Post"
            onClick={() => console.log('my post')}
            isDesabled={true}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};
