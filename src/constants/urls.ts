const apiKey = '499c110af728c79648f3bb1eb9588fe6';
const baseURL = "https://api.themoviedb.org/3";
const imgURL = 'https://image.tmdb.org/t/p/w500/'

const movies = `/discover/movie?api_key=${apiKey}`;
const genres = '/genre/movie/list';
const searches = '/search/keyword?query=';

const urls = {
    movies,
    genres,
    searches
}



export {
    baseURL,
    imgURL,
    apiKey,
    urls
}