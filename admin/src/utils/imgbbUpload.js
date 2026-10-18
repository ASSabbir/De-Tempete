// File: src/utils/imgbbUpload.js
// Same function name as before, so Blogs / NewsEvents / Publications need NO changes.
// It now uploads to our own server instead of ImgBB, and no API key lives in this file anymore.
import API from '../api/axios';

export async function uploadToImgBB(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const { data } = await API.post('/uploads/image', formData, { timeout: 120000 });
    return data.url; // e.g. https://files.yourdomain.com/img/ab12cd34__cover.jpg
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Image upload failed');
  }
}