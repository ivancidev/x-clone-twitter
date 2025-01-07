import { Post } from '../interfaces/posts';
interface RenderImagesProps {
  post: Post;
}
export const RenderImages = ({ post }: RenderImagesProps) => {
  const imagesCount = post.images.length;
  if (imagesCount === 1) {
    return (
      <img
        src={post.images[0]}
        alt="Not found Image"
        className="w-full h-auto max-w-full max-h-[400px] rounded-lg object-cover"
      />
    );
  } else {
    return (
      <div className="grid grid-cols-2 gap-5">
        {post.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Not found Image"
            className="w-full h-auto max-w-full max-h-[300px] sm:max-h-[400px] rounded-lg object-cover"
          />
        ))}
      </div>
    );
  }
};
