import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movies} from "../components/MoviesContainer/Movies";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const {movie} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page, dispatch]);

    return (
        <div>

            <div style={{height:'54px'}}></div>
            <Movies page={page} movies={movie} setQuery={setQuery}/>
        </div>
    );
};

export {
    MoviesPage
}



