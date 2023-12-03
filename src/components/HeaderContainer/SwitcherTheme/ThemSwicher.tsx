import {ChangeEvent, useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {themeActions} from "../../../redux/slices/themeSlice";
import css from "./SwitcherTheme.module.css"

const ThemSwitcher = () => {
    const dispatch = useAppDispatch();
    useAppSelector(state => state.theme)
    let saveLocal = JSON.parse(localStorage.getItem('theme')) || false

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecking(event.target.checked);
        localStorage.setItem('theme', JSON.stringify(event.target.checked))
    };
    const [checking, setChecking] = useState(saveLocal);
    useEffect(() => {
        dispatch(themeActions.themeChange(saveLocal))
    }, [checking]);

    if (!checking) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    return (
        <div>
            <label className={css.switch}>
                <input
                    type={"checkbox"}
                    checked={checking}
                    onChange={handleChange}/>
                <span className={css.slider}></span>
            </label>
        </div>
    );
};

export {
    ThemSwitcher
};
