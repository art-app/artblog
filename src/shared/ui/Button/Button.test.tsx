import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('test Button', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('test Button', () => {
        render(<Button theme={ButtonTheme.DEFAULT}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('default');
    });
});
