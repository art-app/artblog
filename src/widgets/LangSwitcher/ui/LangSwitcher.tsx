import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher:FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <span className={classNames('', [className])}>
            <Button
                onClick={toggleLang}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {short ? t('short lang') : t('lang')}
            </Button>
        </span>
    );
};
