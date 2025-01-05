import { config } from '@/config/env-config';

export const uploadImagesToCloudinary = async (images: File[]) => {
  const uploadedUrls: string[] = [];

  for (const file of images) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', config.CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(`${config.CLOUDINARY_URL}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      uploadedUrls.push(data.secure_url);
    } else {
      throw new Error(`Error uploading image: ${response.statusText}`);
    }
  }

  return uploadedUrls;
};

export const createPost = async (text: string, images: string[]) => {
  const response = await fetch(`${config.API_URL}/create-publication`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, images }),
  });

  if (!response.ok) {
    throw new Error(`Error creating post: ${response.statusText}`);
  }
};
