import React, { Suspense } from 'react';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <NavBar />

                <div className="layout">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
