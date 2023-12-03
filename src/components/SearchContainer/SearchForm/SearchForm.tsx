import {useForm} from "react-hook-form";
import {useState} from "react";

import {ISearchWord} from "../../../interfases";
import {SearchContainer} from "../SearchContainer";
import css from "./SearchForm.module.css";

const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm();
    const [word, setWord] = useState<string>();

    const search = (query: ISearchWord) => {
        setWord(query.key_word)
        reset()
    };

    return (
        <div  >
            <form onSubmit={handleSubmit(search)}>
                <input className={css.Input} type="text" placeholder={'Search movies'} {...register('key_word')}/>
                <button className={css.Button}>Search</button>
            </form>
            <SearchContainer word={word}/>
        </div>
    );
};

export {
    SearchForm
}


