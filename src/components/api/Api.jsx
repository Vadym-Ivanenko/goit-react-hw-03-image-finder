import axios from 'axios';

const API_KEY = '38482196-313c8fae61b907697b0558da7';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchGalleryImages = async (searchQuery, page) => {
  const resp = await axios.get(`?q=${searchQuery}&page=${page}`);

  return resp.data;
};
