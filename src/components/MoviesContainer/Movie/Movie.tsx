import {FC} from "react";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {IMovie} from "../../../interfases";
import css from './Movie.module.css'
import {useAppSelector} from "../../../hooks";
import {imgURL, width200URL} from "../../../constans";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path, id, vote_average} = movie;
    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.theme);

    const nav = () => {
        navigate(`/info/${id}`)
    }

    return (
        <div className={css.Movie} onClick={nav}>
            <div>
                <img src={`${imgURL}${width200URL}${poster_path}`} alt={title}/>
            </div>
            <StarRatings rating={vote_average}
                         numberOfStars={10}
                         starDimension="15px"
                         starSpacing="2px"/>
            <p className={theme ? css.dark : css.light}>{title}</p>
        </div>
    );
};

export {
    Movie
}


