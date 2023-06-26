import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}
export const NavBar:FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NavBar, [className])}>
            <div className={cls.links} />
        </div>
    );
};
