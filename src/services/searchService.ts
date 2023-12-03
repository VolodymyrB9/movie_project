import {axiosService, IRes} from "./axiosService";

import {IData} from "../interfases";
import {urls} from "../constans";

const searchService={
    getBySearch:(query:string, page:string):IRes<IData>=>axiosService.get(urls.search, {params:{query, page}})
}
export {
    searchService
}