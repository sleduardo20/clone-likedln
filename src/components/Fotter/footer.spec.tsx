import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTheme';

import Footer from '.';

const props = [
  {
    link: '#',
    title: 'About',
  },
  {
    link: '#',
    title: 'Carreers',
  },
  {
    link: '#',
    title: 'Advertising',
  },
  {
    link: '#',
    title: 'Small Business',
  },
  {
    link: '#',
    title: 'Talent Solutions',
  },
  {
    link: '#',
    title: 'Marketing Solutions',
  },
  {
    link: '#',
    title: 'Sales Solutions',
  },
  {
    link: '#',
    title: 'Safery Center',
  },
  {
    link: '#',
    title: 'Commutiny Guidelines',
  },
  {
    link: '#',
    title: 'Privacy & Terms',
  },
  {
    link: '#',
    title: 'Mobile App',
  },
];

describe('<Footer />', () => {
  it('should be able render correctly', () => {
    renderWithTheme(<Footer links={props} />);

    expect(screen.getAllByLabelText(/Name Logo/i)).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});
