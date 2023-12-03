import {useEffect} from "react";

import {movieActions} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {Genre} from "../Genre";
import css from './Genres.module.css'

const Genres = () => {

    const {genres} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenreList())
    }, [dispatch]);
    return (
        <div className={css.Wrap}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}