import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ResultsSummary from './ResultsSummary';

export default {
  component: ResultsSummary,
  title: 'Components/ResultsSummary',
} as Meta;

type Story = StoryObj<typeof ResultsSummary>;

export const Default: Story = {
  args: {
    scores: [
      {
        category: 'reaction',
        score: 80,
        icon: './assets/images/icon-reaction.svg',
      },
      {
        category: 'memory',
        score: 92,
        icon: './assets/images/icon-memory.svg',
      },
      {
        category: 'verbal',
        score: 61,
        icon: './assets/images/icon-verbal.svg',
      },
      {
        category: 'visual',
        score: 72,
        icon: './assets/images/icon-visual.svg',
      },
    ],
  },
  render: (args: any) => <ResultsSummary {...args} />,
};
