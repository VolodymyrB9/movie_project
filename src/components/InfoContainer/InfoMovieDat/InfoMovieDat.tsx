import {FC} from "react";
import StarRatings from "react-star-ratings";

import {IInfo} from "../../../interfases";
import css from './InfoMovieDat.module.css'
import {imgURL, width400URL} from "../../../constans";

interface IProps {
   info: IInfo
}

const InfoMovieDat: FC<IProps> = ({info}) => {

    const {title, poster_path, vote_average, overview, genres} = info
    return (
        <div className={css.wrap}>
            <div className={css.block}>
                <div style={{margin: '1em'}}>
                    <img src={`${imgURL}${width400URL}${poster_path}`} alt={title}/>
                </div>
                <div className={css.title}>{title}</div>
                <div>
                    <p>rating</p>
                    <StarRatings rating={vote_average}
                                 numberOfStars={10}
                                 starDimension={'40px'}
                                 starSpacing={'4px'}/>
                    <p>genres</p>
                    <div className={css.text}>
                        {genres.map(genre => <div key={genre.id}> {genre.name}  </div>)}
                    </div>
                </div>
            </div>
            <p>overview</p>
            <div className={css.text}>{overview}</div>
        </div>
    );
};

export {
    InfoMovieDat
}