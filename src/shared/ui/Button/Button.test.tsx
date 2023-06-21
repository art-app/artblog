import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('test Button', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('test Button', () => {
        render(<Button theme={ThemeButton.DEFAULT}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('default');
    });
});
