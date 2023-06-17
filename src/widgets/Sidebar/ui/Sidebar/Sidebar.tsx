import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({className}) => {

    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed( prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}>
            <Button onClick={onToggle}>{t('toggle')}</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
