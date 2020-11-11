import { Story, Meta } from '@storybook/react/types-6-0';
import { FiEdit, FiMoreVertical } from 'react-icons/fi';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const basicBlue: Story<ButtonProps> = args => <Button {...args} />;
basicBlue.args = {
  children: 'contact info',
  color: 'blue',
  size: 'large',
};

export const basicWhite: Story<ButtonProps> = args => <Button {...args} />;
basicWhite.args = {
  children: 'edit profile',
  color: 'white',
  icon: <FiEdit />,
};

export const withBorder: Story<ButtonProps> = args => <Button {...args} />;
withBorder.args = {
  children: '1.043 connections',
  border: true,
};

export const small: Story<ButtonProps> = args => <Button {...args} />;
small.args = {
  icon: <FiMoreVertical />,
  size: 'small',
};
