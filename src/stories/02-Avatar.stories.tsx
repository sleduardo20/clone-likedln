import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from '../components/Avatar';

export default {
  title: 'components/Avatar',
  component: Avatar,
} as Meta;

export const basic: Story<AvatarProps> = args => <Avatar {...args} />;
