import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ScoreCategoryCard from './ScoreCategoryCard';

export default {
  component: ScoreCategoryCard,
  title: 'Components/ScoreCategoryCard',
} as Meta;

type Story = StoryObj<typeof ScoreCategoryCard>;

export const Default: Story = {
  args: {},
  render: (args: any) => <ScoreCategoryCard {...args} />,
};