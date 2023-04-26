import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ResultsSummary from '@/components/ResultsSummary';

expect.extend(toHaveNoViolations);

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
];

describe('ResultsSummary Component', () => {
  it('Should Render without errors', () => {
    render(<ResultsSummary scores={data} />);

    expect(screen.getByTestId('results-summary')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<ResultsSummary scores={data} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
