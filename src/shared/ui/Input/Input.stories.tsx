import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Type text',
    placeholder: 'Input text',
    value: 'text',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: 'Input text',
};
