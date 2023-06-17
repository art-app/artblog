import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme = ThemeButton.DEFAULT,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, [className, cls[theme]] )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
