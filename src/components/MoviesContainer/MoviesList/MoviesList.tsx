import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useEffect, useState} from "react";
import {moviesService} from "../../../services/moviesService";
import {IMovies} from "../../../interfaces/movieInterface";
import {useSearchParams} from "react-router-dom";
const MoviesList = () => {
    const [response, setResponse] = useState<IMovies>()
    const [lastPage, setLastPage] = useState<number>(Number.MAX_VALUE);
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
        moviesService.getAll(page)
            .then(({data}) => setResponse(data))
            .catch((error) => {
                if (error.response && error.response.status === 422) {
                    setLastPage(Number(page) - 1);
                    console.log(lastPage);
                    prevPage()
                } else {
                    console.error("Помилка запиту:", error.message);
                }
            });
    }, [page]);

    return (
        <div>
            {response?.results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <button disabled={Number(page) <= 1} onClick={prevPage}>Prev</button>
            <button disabled={Number(page) === lastPage} onClick={nextPage}>Next</button>
            <p>{Number(page)}</p>
            <p>{lastPage}</p>
        </div>
    );
};

export {MoviesList};