import { StateSchema } from 'app/providers/StoryProvider';

export const getUserInitiated = (state: StateSchema) => state.user._initiated;
