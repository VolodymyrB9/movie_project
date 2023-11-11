import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {GenresPage} from "./pages/GenresPage/GenresPage";
import {SearchPage} from "./pages/SearchPage/SearchPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout />, children: [
            {index: true, element: <Navigate to={'movies'} />},
            {path: 'movies', element: <MoviesPage /> },
            {path: 'genres', element: <GenresPage />},
            {path: 'search', element: <SearchPage />}
        ]}
]);

export {
    router
}