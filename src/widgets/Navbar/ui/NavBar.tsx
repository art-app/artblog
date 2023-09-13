import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}
export const NavBar:FC<NavBarProps> = ({ className }) => {
    const [isAuthNodal, setIsAuthNodal] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthNodal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthNodal(true);
    }, []);

    return (
        <div className={classNames(cls.NavBar, [className])}>
            <Button
                theme={ButtonTheme.LINK_INVERTED}
                size={ButtonSize.M}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('login')}
            </Button>

            <LoginModal isOpen={isAuthNodal} onClose={onCloseModal} />
        </div>
    );
};
