import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../../model/types/profileSchema';
import { profileActions, profileReducer, profileSlice } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Sweden,
    lastname: 'Alex',
    first: 'NI',
    city: 'wv',
    currency: Currency.USD,
};

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state:DeepPartial<ProfileSchema> = { readonly: false };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state:DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true, validateError: undefined, data, form: data,
        });
    });

    test('test update profile', () => {
        const state:DeepPartial<ProfileSchema> = { form: { username: 'test' } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'Alex',
                }),
            ),
        ).toEqual({
            form: { username: 'Alex' },
        });
    });

    test('test update profile service pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
