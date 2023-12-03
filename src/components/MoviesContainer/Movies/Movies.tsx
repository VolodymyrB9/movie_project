import {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfases";
import {Movie} from "../Movie";
import css from './Movies.module.css'

interface IProps{
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}

const Movies:FC<IProps> = ({movies,setQuery,page}) => {
    const prev = () => {
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')-1}`)
            return prev

        })
    };
    const next = () => {
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })
    };

    return (
        <div>
            <div className={css.Wrap}>{movies.map(movie=><Movie key={movie.id} movie={movie}/>)} </div>
            <div className={css.Button_container}>
                <button className={css.Button} disabled={page==='1'} onClick={prev}>prev</button>
                <div className={css.Page_number}>{page}</div>
                <button className={css.Button} disabled={page==='500'} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {
    Movies
}