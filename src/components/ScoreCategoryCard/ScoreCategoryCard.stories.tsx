import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ScoreCategoryCard from './ScoreCategoryCard';

const categorgies = ['reaction', 'memory', 'verbal', 'visual'];

export default {
  component: ScoreCategoryCard,
  title: 'Components/ScoreCategoryCard',
} as Meta;

type Story = StoryObj<typeof ScoreCategoryCard>;

export const Default: Story = {
  args: {
    category: 'reaction',
    score: 50,
    icon: `/assets/icons/icon-reaction.svg`,
  },
  render: (args: any) => <ScoreCategoryCard {...args} />,
};

export const Variants: Story = {
  args: {
    score: 50,
  },
  render: (args: any) =>
    <div>
      {categorgies.map(category => <ScoreCategoryCard key={category} category={category} icon={`/assets/icons/icon-${category}.svg`} {...args} />)}
    </div>,
};