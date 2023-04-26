import * as React from 'react';
  import { render, screen } from '@testing-library/react';
  import { axe, toHaveNoViolations } from "jest-axe";
  import ScoreCategoryCard from '@/components/ScoreCategoryCard';

  expect.extend(toHaveNoViolations);

  describe("App Component", () => {
    it("Should Render without errors", () => {
      render(<ScoreCategoryCard />);
      
      expect(screen.getByRole('ScoreCategoryCard')).toBeInTheDocument();
    });
    it("Should render without Axe Core A11Y errors", async () => {
      render(<ScoreCategoryCard />);

      expect(await axe(render(<ScoreCategoryCard />)).toHaveNoViolations();
    });
  });