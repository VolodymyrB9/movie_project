import {PosterPreviews} from "../../PosterPreview/PosterPreviews";
import {StarsRating} from "../../StarsRating/StarsRating";
import {FC} from "react";
import {IMovie} from "../../../interfaces/movieInterface";

interface IProps {
    movie: IMovie
}
const MovieListCard: FC<IProps> = ({movie}) => {
    const { title} = movie;
    return (
        <div>
            <PosterPreviews />
            <StarsRating />
            <p>{title}</p>
        </div>
    );
};

export {MovieListCard};