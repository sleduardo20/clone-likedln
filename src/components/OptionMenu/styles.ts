import styled from 'styled-components';
import theme from '../../styles/theme';

export const Option = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};
  font-size: ${theme.font.size.small};
  line-height: ${theme.spacings.large};
  padding: ${theme.spacings.medium} ${theme.spacings.large}
    ${theme.spacings.small} ${theme.spacings.large};

  strong {
    margin-top: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
  }

  &:hover {
    color: ${theme.colors.blue};
    cursor: pointer;
  }

  &.active {
    color: ${theme.colors.blue};

    &::after {
      content: '';
      width: 8rem;
      height: 0.1rem;
      background: ${theme.colors.blue};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }
`;
