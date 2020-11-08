import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTheme';

import Avatar from '.';

describe('<Avatar />', () => {
  it('should render Avatar component size small correctly', () => {
    const { container } = renderWithTheme(<Avatar size="small" />);

    expect(container.firstChild).toHaveStyle({
      width: '4.2rem',
      height: '4.2rem',
    });
  });

  it('should render Avatar component size medium correctly', () => {
    const { container } = renderWithTheme(<Avatar size="medium" />);

    expect(container.firstChild).toHaveStyle({
      width: '5.2rem',
      height: '5.2rem',
    });
  });

  it('should render Avatar component size large correctly', () => {
    const { container } = renderWithTheme(<Avatar size="large" />);

    expect(container.firstChild).toHaveStyle({
      width: '17rem',
      height: '17rem',
      border: '1rem solid #ffff',
    });
  });
});
