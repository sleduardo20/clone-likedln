import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTheme';

import mockFooter from './mock';

import Footer from '.';

const props = mockFooter;

describe('<Footer />', () => {
  it('should be able render correctly', () => {
    renderWithTheme(<Footer links={props} />);

    expect(screen.getAllByLabelText(/Name Logo/i)).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});
