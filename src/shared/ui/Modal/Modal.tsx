import React, {
    FC, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal:FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, [className], mods)}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
