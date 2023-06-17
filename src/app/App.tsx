import React from 'react';

import './styles/index.scss'
import {classNames} from "shared/lib/classNames/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {useTheme} from "app/providers/ThemeProvider";

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', [theme])}>
            <NavBar />

            <AppRouter />
        </div>
    );
};

export default App
