export const getSearches = () => localStorage.getItem('searches');
export const setSearches = (newSearches) =>
  localStorage.setItem('searches', newSearches);

export const getFilmInfo = (title) => localStorage.getItem(title);
export const setFilmInfo = (title, info) => localStorage.setItem(title, info);

export const setCurrentResult = (result) =>
  localStorage.setItem('result', result);
export const getCurrentResult = () => localStorage.getItem('result');
