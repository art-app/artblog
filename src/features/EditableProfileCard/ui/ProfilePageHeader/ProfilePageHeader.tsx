import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean;
    onEdit: () => void;
    onCancelEdit: () => void;
    onSave: () => void;
}

export const ProfilePageHeader:FC<ProfilePageHeaderProps> = (props) => {
    const {
        className, readonly, onCancelEdit, onEdit, onSave,
    } = props;
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfilePageHeader, [className])}>
            <Text title={t('Профиль')} />

            {readonly
                ? (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                        <Button theme={ButtonTheme.OUTLINE_WARNING} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
