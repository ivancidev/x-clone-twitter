export const config = {
  API_URL: import.meta.env.VITE_API_URL as string,
  CLOUDINARY_URL: import.meta.env.VITE_CLOUDINARY_URL as string,
  CLOUDINARY_UPLOAD_PRESET: import.meta.env
    .VITE_CLOUDINARY_UPLOAD_PRESET as string,
  VITE_GIPHY_API_KEY: import.meta.env.VITE_GIPHY_API_KEY as string,
};
