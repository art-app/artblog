import React from 'react';

import './styles/index.scss'
import {classNames} from "shared/lib/classNames/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', [theme])}>
            <NavBar />

            <div className={'layout'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App
