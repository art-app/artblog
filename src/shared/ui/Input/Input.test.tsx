import { render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from 'shared/ui/Input/Input';

describe('Input', () => {
    test('test Input', () => {
        render(<Input>test</Input>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('test Input', () => {
        render(<Input>test</Input>);
        expect(screen.getByText('test')).toHaveClass('default');
    });
});
