import { StateSchema } from 'app/providers/StoryProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('return profile data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Sweden,
            lastname: 'Alex',
            first: 'NI',
            city: 'wv',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
