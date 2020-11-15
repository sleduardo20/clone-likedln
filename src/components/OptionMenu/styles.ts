import styled from 'styled-components';
import theme from '../../styles/theme';

export const Option = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};

  strong {
    margin-top: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
  }

  &:hover {
    color: ${theme.colors.orange};
  }

  &.active {
    > a {
      color: ${theme.colors.blue};
    }
    &::after {
      content: '';
      width: 100%;
      height: 0.1rem;
      background: ${theme.colors.blue};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;
