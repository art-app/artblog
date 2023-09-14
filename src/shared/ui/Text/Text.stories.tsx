import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Тестирование',
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Тестирование',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    title: 'Тестирование',
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Тестирование',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Тестирование',
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'Тестирование',
    text: 'Тестирование – это очень важный этап разработки удобных цифровых продуктов. Когда вы тестируете продукт с реальным контентом, гораздо выше шансы получить полезный фидбэк, что в свою очередь позволит вам сделать пользовательский опыт еще лучше.',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
