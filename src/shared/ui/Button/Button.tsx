import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    DEFAULT = 'default',
    LINK = 'link',
    LINK_INVERTED = 'linkInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, [className, cls[theme], cls[size]], mods)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
