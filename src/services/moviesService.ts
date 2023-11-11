import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";
import {IMovies} from "../interfaces/movieInterface";

const moviesService = {
    getAll: (page: string | null): IRes<IMovies> => axiosService.get(urls.movies, {params: {page: `${page}`}})
}

export {
    moviesService
}