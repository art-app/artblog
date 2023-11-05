import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/lib/classNames';
import { AppRouter }
    from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitiated, userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const initiated = useSelector(getUserInitiated);

    document.body.className = theme;

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <NavBar />

                <div className="layout">
                    <Sidebar />
                    {initiated && <AppRouter /> }
                </div>
            </Suspense>
        </div>
    );
}

export default App;
