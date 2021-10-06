const BASE_URL = 'https://restcountries.com/v3';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${name}`).then(response => response.json());
}
export default { fetchCountries };
