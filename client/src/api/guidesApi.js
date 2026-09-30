import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://admin.detempete.uk/api';

export const fetchGuideByKey = (guideKey) =>
  axios
    .get(`${API_BASE}/business-setup-leads/guides/${guideKey}`)
    .then(res => res.data);