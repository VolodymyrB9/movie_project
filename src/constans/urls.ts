const baseURL ='https://api.themoviedb.org/3'

const imgURL = 'https://image.tmdb.org/t/p'
const width200URL = '/w200/'
const width400URL = '/w400/'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTljMTEwYWY3MjhjNzk2NDhmM2JiMWViOTU4OGZlNiIsInN1YiI6IjY1NDkzMmUzNTMyYWNiMDExYjEwNGQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBI7rw7veTt6iITGdBU9jrFkz7CPdwHQgSGjy32DVI8'
const discover='/discover'
const movie='/movie'
const genre='/genre'
const list ='/list'
const search='/search'


const urls = {
    movies:`${discover}${movie}`,
    info:{
        byId:(id:string)=>`${movie}/${id}`
    },
    genre:`${genre}${movie}${list}`,
    search:`${search}${movie}`
}




export {
    token,
    baseURL,
    imgURL,
    width200URL,
    width400URL,
    urls
}