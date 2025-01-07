import { formatDate } from '@/utils/form-date';
import { MoreIcon } from '../../../common/icons/more-icon';
import { VerifiedIcon } from '../../../common/icons/verified-icon';
import { Post } from '../interfaces/posts';
import { PostActions } from './post-actions';
import { RenderImages } from './render-images';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  const { timeAgo } = formatDate(post.createdAt);

  return (
    <div className="bg-twitter-dark p-4 border-gray-700 border-[1px] sm:p-3 w-full">
      <div className="flex items-start space-x-4">
        <img
          src={post.avatarUrl}
          alt="Not found Image"
          className="w-8 h-8 rounded-full sm:w-12 sm:h-12"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-wrap gap-x-1">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white text-sm sm:text-base">
                  {post.name}
                </span>
                <VerifiedIcon />
              </div>
              <span className="text-gray-400 text-sm sm:ml-2">
                @{post.username} .
              </span>
              <span className="text-xs text-gray-400">{timeAgo}</span>
            </div>
            <div className="flex-shrink-0">
              <MoreIcon />
            </div>
          </div>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            {post.description}
          </p>
          {post.images && post.images.length > 0 && (
            <div className="mt-4">
              <RenderImages post={post} />
            </div>
          )}
          <PostActions />
        </div>
      </div>
    </div>
  );
};
