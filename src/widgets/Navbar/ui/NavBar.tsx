import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string
}
export const NavBar:FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.NavBar, [className] )}>
            <div className={cls.links} >
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};
