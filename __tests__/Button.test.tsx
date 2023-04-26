import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import Button from '@/components/Button';

expect.extend(toHaveNoViolations);

describe("App Component", () => {
  it("Should Render without errors", () => {
    render(<Button>abc 123</Button>);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    render(<Button>abc 123</Button>);

    expect(await axe(screen.getByRole('button'))).toHaveNoViolations();
  });
});
