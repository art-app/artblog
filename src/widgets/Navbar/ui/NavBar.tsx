import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const [isAuthNodal, setIsAuthNodal] = useState(false);
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthNodal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthNodal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.NavBar, [className])}>
                <Button
                    theme={ButtonTheme.LINK_INVERTED}
                    size={ButtonSize.M}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('выйти')}
                </Button>

            </div>
        );
    }

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

            {isAuthNodal && <LoginModal isOpen={isAuthNodal} onClose={onCloseModal} />}
        </div>
    );
};
