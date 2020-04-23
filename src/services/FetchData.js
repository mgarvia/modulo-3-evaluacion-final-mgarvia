const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData;