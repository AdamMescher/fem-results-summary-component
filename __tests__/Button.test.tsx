import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '@/components/Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('Should render without errors', () => {
    render(<Button>abc 123</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<Button>123 abc</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
