import {axiosService, IRes} from "./axiosService";
import {urls} from "../constans";
import {IData, IGenreList} from "../interfases";

const genresService={
    getAll:():IRes<IGenreList>=>axiosService.get(urls.genre),
    byId:(page:string, with_genres:string):IRes<IData>=>axiosService.get(urls.movies, {params:{page, with_genres}})
}
export {
    genresService
}


