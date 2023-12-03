import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenres} from "../../../interfases";
import css from './Genre.module.css'

interface IProps {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    const navigate = useNavigate();

    const nav = () => {
        navigate(`/genres/${id}`)
    };

    return (
        <>
            <button className={css.Button} onClick={nav}>{name}</button>
        </>)
};

export {
    Genre
}