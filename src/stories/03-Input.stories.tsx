import { Story, Meta } from '@storybook/react/types-6-0';
import { FiSearch } from 'react-icons/fi';

import Input, { InputProps } from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
} as Meta;

export const basic: Story<InputProps> = args => (
  <div style={{ width: '38rem', height: '15rem', margin: '0 auto' }}>
    <Input placeholder="Search" {...args} />
  </div>
);

export const wihtIcon: Story<InputProps> = args => (
  <div style={{ width: '38rem', height: '15rem', margin: '0 auto' }}>
    <Input icon={<FiSearch />} placeholder="Search" {...args} />
  </div>
);
