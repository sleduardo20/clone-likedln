import { screen } from '@testing-library/react';
import { FiSearch } from 'react-icons/fi';
import { renderWithTheme } from '../../utils/renderWithTheme';

import Input from '.';

describe('<Input/>', () => {
  it('should be able render Input compoment correctly', () => {
    const { container } = renderWithTheme(<Input name="search" />);

    expect(screen.getByRole('textbox').parentElement).toHaveAttribute(
      'name',
      'search',
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render Input compoment correctly with icon', () => {
    renderWithTheme(
      <Input name="search" icon={<FiSearch data-testid="icon" />} />,
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
