import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}
export const NavBar:FC<NavBarProps> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.NavBar, [className])}>
            <Button
                theme={ButtonTheme.LINK_INVERTED}
                size={ButtonSize.M}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>

            <Modal isOpen={open} onClose={onToggleModal}>
                <span>
                    {t('We are formalizing our plans to enter AWS SDK for JavaScript')}
                </span>
            </Modal>
        </div>
    );
};
