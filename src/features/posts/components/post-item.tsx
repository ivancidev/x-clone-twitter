import { MoreIcon } from '../../../common/icons/more-icon';
import { VerifiedIcon } from '../../../common/icons/verified-icon';
import { Post } from '../interfaces/posts';
import { PostActions } from './post-actions';

interface PostItemProps {
  post: Post;
}
export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="bg-twitter-dark p-4 border-gray-700 border-[1px]">
      <div className="flex items-start space-x-4">
        <img
          src={post.avatarUrl}
          alt="Not found Image"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">{post.name}</span>
                <VerifiedIcon />
              </div>
              <span className="text-gray-400 mr-2 ml-2">
                @{post.username} .
              </span>
              <span className="text-sm text-gray-400">{post.createdAt}</span>
            </div>
            <MoreIcon />
          </div>
          <p className="text-gray-300 mt-2">{post.description}</p>
          <div>
            <img
              src={post.imgPost}
              alt="Not found Image"
              className="w-full h-auto max-w-full max-h-[400px] mt-4 rounded-lg object-cover"
            />
            <PostActions />
          </div>
        </div>
      </div>
    </div>
  );
};
