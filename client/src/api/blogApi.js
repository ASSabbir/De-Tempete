import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://api.detempete.uk/api';

export const fetchBlogs = (page = 1, limit = 9) =>
  axios.get(`${API_BASE}/blogs`, { params: { page, limit } }).then(res => res.data);

export const fetchBlogBySlug = (slug) =>
  axios.get(`${API_BASE}/blogs/${slug}`).then(res => res.data);

export const fetchRecentBlogs = (excludeSlug) =>
  axios
    .get(`${API_BASE}/blogs/recent`, { params: excludeSlug ? { exclude: excludeSlug } : {} })
    .then(res => res.data);