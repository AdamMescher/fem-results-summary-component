import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ScoreCategoryCard from '@/components/ScoreCategoryCard';

expect.extend(toHaveNoViolations);

describe('ScoreCategoryCard Component', () => {
  it('Should Render without errors', () => {
    const category = 'memory';
    const score = 55;

    render(<ScoreCategoryCard category={category} score={score} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('Should render without Axe Core A11Y errors', async () => {
    const category = 'memory';
    const score = 55;

    const { container } = render(
      <ScoreCategoryCard category={category} score={score} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render variants conditionally based on category prop', () => {
    const categories = ['reaction', 'memory', 'verbal', 'visual'];

    render(
      <div>
        {categories.map((category) => (
          <ScoreCategoryCard key={category} category={category} score={77} />
        ))}
      </div>
    );

    expect(screen.getByText(/reaction/i)).toBeInTheDocument();
    expect(screen.getByText(/memory/i)).toBeInTheDocument();
    expect(screen.getByText(/verbal/i)).toBeInTheDocument();
    expect(screen.getByText(/visual/i)).toBeInTheDocument();
  });
});
