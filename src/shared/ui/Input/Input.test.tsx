import { render } from '@testing-library/react';
import React from 'react';
import { Input } from './Input';

describe('Input', () => {
    test('renders without crashing', () => {
        const { container } = render(<Input />);
        expect(container).toBeInTheDocument();
    });

    test('renders a label if provided', () => {
        const { getByText } = render(<Input label="Test Label" />);
        const labelElement = getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

    test('renders an input field with the correct type', () => {
        const { container } = render(<Input type="password" />);
        const inputElement = container.querySelector('input');
        expect(inputElement).toHaveAttribute('type', 'password');
    });
});
