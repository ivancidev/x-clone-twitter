import { useGetData } from '@/hooks/use-get-data';
import { PostItem } from './post-item';
import { config } from '@/config/env-config';
import { CircularProgress } from '@mui/material';

export const PostList = () => {
  const {
    data: posts = [],
    isLoading: isPostsLoading,
    error,
  } = useGetData(config.API_URL);
  if (isPostsLoading || error || !posts) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className=" bg-twitter-dark">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};
