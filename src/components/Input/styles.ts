import styled, { css } from 'styled-components';
import { InputProps } from '.';

type ContainerProps = Pick<InputProps, 'icon' | 'name'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, icon }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmal} ${theme.spacings.medium};
    height: ${theme.spacings.huge};
    background: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    ${!!icon &&
    css`
      > svg {
        width: ${theme.spacings.large};
        height: ${theme.spacings.large};
        margin-right: ${theme.spacings.small};
        color: ${theme.colors.blue};
      }
    `}

    > input {
      flex: 1;
      outline: none;
      padding: ${theme.spacings.small};
      font-size: ${theme.font.size.normal};
      line-height: ${theme.font.size.medium};
      color: ${theme.colors.black};
      border: none;
      width: 100%;
      height: 100%;

      &::placeholder {
        color: ${theme.colors.gray};
      }
    }
  `}
`;
