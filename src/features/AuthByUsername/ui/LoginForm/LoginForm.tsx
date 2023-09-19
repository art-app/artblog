import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoryProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducer: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
