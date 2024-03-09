export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '42789020-c2dc414543595960212044fc8',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url).then(res => res.json());
}