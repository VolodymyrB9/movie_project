import {axiosService, IRes} from "./axiosService";

import {urls} from "../constans";
import {IData} from "../interfases";

const movieService={
    getAll:(page:string):IRes<IData> => axiosService.get(urls.movies, {params:{page}})
}

export {
    movieService
}