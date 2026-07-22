// File: src/utils/imgbbUpload.js
const IMGBB_API_KEY = 'e38e9dc29d9eb146f7f84a75c4b9b668';

export async function uploadToImgBB(file) {
  if (!IMGBB_API_KEY) {
    throw new Error('Missing VITE_IMGBB_API_KEY in your .env file');
  }

  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error?.message || 'Image upload failed');
  }

  return data.data.url; // hosted image URL
}