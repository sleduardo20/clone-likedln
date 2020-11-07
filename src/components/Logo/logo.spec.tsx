import { screen, render } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render Logo component correctly', () => {
    render(<Logo />);

    expect(screen.queryByLabelText(/name logo/i)).not.toBeInTheDocument();

    expect(screen.getByLabelText('color01')).toHaveAttribute(
      'stop-color',
      '#0077B5',
    );

    expect(screen.getByLabelText('color02')).toHaveAttribute(
      'stop-color',
      '#0E6795',
    );
  });

  it('should render Logo component with name logo', () => {
    render(<Logo hasName />);

    expect(screen.queryAllByLabelText(/name logo/i)).toHaveLength(2);
  });

  it('should render Logo component type premium', () => {
    render(<Logo color="premium" />);

    expect(screen.getByLabelText('color01')).toHaveAttribute(
      'stop-color',
      '#D8C281',
    );

    expect(screen.getByLabelText('color02')).toHaveAttribute(
      'stop-color',
      '#AC9B69',
    );
  });
});
