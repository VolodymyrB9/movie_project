import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IData, IGenreList, IGenres, IInfo, IMovie} from "../../interfases";
import {genresService, infoService, movieService, searchService} from "../../services";

interface IState {
    movie: IMovie[],
    page: number,
    genres: IGenres[],
    info:IInfo,
    themeSwitch:boolean,
}

const initialState: IState = {
    movie: [],
    page: null,
    genres: [],
    info: null,
    themeSwitch:null,
}

const getAll = createAsyncThunk<IData, { page: string }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getGenreList = createAsyncThunk<IGenreList>(
    'movieSlice/getGenreList',
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await genresService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieByGenre = createAsyncThunk<IData, {page:string, with_genres:string}>(
    'movieSlice/getMovieByGenre',
    async ({page, with_genres},{rejectWithValue}) =>{
        try {
            const {data} = await genresService.byId(page, with_genres)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getBySearch = createAsyncThunk<IData, { word: string, page: string }>(
    'movieSlice/getBySearch',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getBySearch(word, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieInfo=createAsyncThunk<IInfo, {id:string}>(
    'movieSlice/getMovieInfo',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data}=await infoService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movie = results
            })
            .addCase(getBySearch.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movie = results
            })
            .addCase(getGenreList.fulfilled, (state, action) => {
                const {genres}=action.payload
                state.genres=genres
            })
            .addCase(getMovieByGenre.fulfilled,(state, action) => {
                const {results}=action.payload
                state.movie=results
            })
            .addCase(getMovieInfo.fulfilled, (state, action) =>{
                state.info = action.payload
            } )

})

const {reducer: movieReducers, actions} = movieSlice;
const movieActions = {
    ...actions,
    getAll,
    getBySearch,
    getGenreList,
    getMovieByGenre,
    getMovieInfo
}

export {
    movieReducers,
    movieActions
}