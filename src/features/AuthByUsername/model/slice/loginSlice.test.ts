import { loginActions, LoginSchema } from 'features/AuthByUsername';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state:DeepPartial<LoginSchema> = { username: 'Alex' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUserName('Sam'),
            ),
        ).toEqual({ username: 'Sam' });
    });

    test('test set password', () => {
        const state:DeepPartial<LoginSchema> = { password: '' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123'),
            ),
        ).toEqual({ password: '123' });
    });
});
