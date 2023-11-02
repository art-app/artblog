import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'features/EditableProfileCard';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeCountry: (value: Country) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeCountry,
        onChangeCurrency,
        onChangeUsername,
        onChangeAvatar,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls?.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls?.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, [className])}>

            <div className={cls.data}>
                <Input
                    value={data?.first}
                    label={t('Ваше имя')}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />

                <Input
                    value={data?.lastname}
                    label={t('Ваша фамилия')}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />

                <Input
                    value={data?.age}
                    label={t('Ваш возраст')}
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />

                <Input
                    value={data?.avatar}
                    label={t('Ссылка на аватар')}
                    placeholder={t('Введите ссылку на аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />

                <Input
                    value={data?.username}
                    label={t('Логин')}
                    placeholder={t('Введите логин')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />

                <Input
                    value={data?.city}
                    label={t('Город')}
                    placeholder={t('Введите город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />

            </div>

            {data?.avatar && <div><Avatar src={data.avatar} size={150} /></div> }
        </div>
    );
};
