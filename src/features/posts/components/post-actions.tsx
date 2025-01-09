import { StaticIcon } from '@/common/icons/static-icon';
import { CommentIcon } from '../../../common/icons/comment-icon';
import { ReactIcon } from '../../../common/icons/react-icon';
import { RepostIcon } from '../../../common/icons/repost-icon';
import { SavePostIcon } from '../../../common/icons/save-post-icon';
import { ShareIcon } from '../../../common/icons/share-icon';
import { Action } from './action';

export const PostActions = () => {
  return (
    <div className="flex justify-between items-center mt-4 text-gray-400">
      <Action
        icon={<CommentIcon />}
        label="73"
        onClick={() => console.log('Like')}
      />
      <Action
        icon={<RepostIcon />}
        label="573"
        onClick={() => console.log('Like')}
      />
      <Action
        icon={<ReactIcon />}
        label="555k"
        onClick={() => console.log('Like')}
      />
      <Action
        icon={<StaticIcon />}
        label="276k"
        onClick={() => console.log('Like')}
      />
      <div className='flex'>
        <Action
          icon={<SavePostIcon />}
          onClick={() => console.log('Like')}
        />
        <Action
          icon={<ShareIcon />}
          onClick={() => console.log('Like')}
        />
      </div>
    </div>
  );
};
