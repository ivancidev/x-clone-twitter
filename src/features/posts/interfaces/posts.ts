export interface Post {
  _id: string;
  description: string;
  name?: string;
  username?: string;
  createdAt: string;
  avatarUrl?: string;
  images: string[];
}
