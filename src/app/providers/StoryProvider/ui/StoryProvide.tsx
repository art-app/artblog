import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../index';
import { StateSchema } from '../config/StateSchema';

interface StoryProvideProps {
    children?: ReactNode;
    initialState?: StateSchema
}

export const StoryProvide:FC<StoryProvideProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
