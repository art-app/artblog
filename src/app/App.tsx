import React from 'react';

import './styles/index.scss'
import {classNames} from "shared/lib/classNames/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', [theme])}>
            <NavBar />

            <button onClick={toggleTheme}>toggle theme</button>

            <AppRouter />
        </div>
    );
};

export default App
