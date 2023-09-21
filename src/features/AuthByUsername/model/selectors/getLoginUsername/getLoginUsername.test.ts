import { StateSchema } from 'app/providers/StoryProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('name');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
