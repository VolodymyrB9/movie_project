import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemSwitcher} from "../SwitcherTheme/ThemSwicher";

const Header = () => {
    return (
        <div className={css.Header}>
            <h3>MovieDB</h3>
            <div>
                <NavLink to={'/movies'}>| Movies |</NavLink>
                <NavLink to={'/genres/:id'}>| Genres |</NavLink>
                <NavLink to={'/search'}>| Search |</NavLink>
            </div>
            <div>
                <span className={css.theme}>Theme</span>
            </div>
                <ThemSwitcher/>
            <div><img src="/logo512.png" alt="user" className={css.Image}/></div>
        </div>
    );
};

export {
    Header
}