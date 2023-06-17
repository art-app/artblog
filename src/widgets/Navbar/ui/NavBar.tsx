import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string
}
export const NavBar:FC<NavBarProps> = ({className}) => {

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NavBar, [className] )}>
            <div className={cls.links} >
                <AppLink to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
