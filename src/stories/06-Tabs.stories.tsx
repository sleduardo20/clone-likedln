import { Meta, Story } from '@storybook/react/types-6-0';

import ContentTab, { TabContentProps } from '../components/Tabs';

export default {
  title: 'components/Tabs',
  component: ContentTab,
} as Meta;

export const Basic: Story<TabContentProps> = args => <ContentTab {...args} />;
Basic.args = {
  title01: 'Profile',
  title02: 'Activity & Interests',
  title03: 'Articles',
  content01: 'Content 01',
  content02: 'Content 02',
  content03: 'Content 03',
};
