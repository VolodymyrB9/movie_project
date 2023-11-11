import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
           <h1>MoviesDB</h1>
            <NavLink to={'movies'}>MOVIES</NavLink>
            <NavLink to={'genres'}>GENRES</NavLink>
            <NavLink to={'search'}>SEARCH</NavLink>

        </div>
    );
};

export {Header};