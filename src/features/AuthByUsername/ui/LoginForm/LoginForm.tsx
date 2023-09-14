import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Text title={t('Авторизация')} />

            <Input
                type="text"
                placeholder={t('введите логин')}
                label={t('логин')}
                value={username}
                onChange={onChangeUsername}
                autoFocus
            />

            <Input
                type="text"
                placeholder={t('введите пароль')}
                label={t('пароль')}
                onChange={onChangePassword}
                value={password}
            />

            <div className={cls.flex}>
                <Button
                    onClick={onLoginClick}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>

                {error && <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR} />}
            </div>

        </div>
    );
});
