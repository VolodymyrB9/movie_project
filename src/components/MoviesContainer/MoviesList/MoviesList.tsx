import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useEffect, useState} from "react";
import {moviesService} from "../../../services/moviesService";
import {IMovies} from "../../../interfaces/movieInterface";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const [response, setResponse] = useState<IMovies>()
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    const nextPage = () => {
        const pageNumber = Number(page);

        if (!isNaN(pageNumber)) {
            setQuery({page: String(pageNumber + 1)});
        }
    }
    const prevPage = () => {
        const pageNumber = Number(page);

        if (!isNaN(pageNumber) && pageNumber > 1) {
            setQuery({page: String(pageNumber - 1)});
        }
    };

    useEffect(() => {
        moviesService.getAll(page).then(({data}) => setResponse(data));
    }, [page])

    return (
        <div>
            {response?.results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <button disabled={Number(page) <= 1} onClick={prevPage}>Prev</button>
            <button disabled={page === '500'} onClick={nextPage}>Next</button>

        </div>
    );
};

export {MoviesList};