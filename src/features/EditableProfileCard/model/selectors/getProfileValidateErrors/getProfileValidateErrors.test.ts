import { StateSchema } from 'app/providers/StoryProvider';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/profileSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateError', () => {
    test('should return validateError', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
