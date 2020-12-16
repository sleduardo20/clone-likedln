import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type ContainerProps = Pick<
  ButtonProps,
  'size' | 'color' | 'border' | 'positionIconLeft'
>;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: ${theme.border.radius4};
    background: ${theme.colors.white};

    > svg {
      height: 2.4rem;
      width: 2.4rem;
      margin: 0;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    width: 13.2rem;
    height: 3.6rem;
    border-radius: ${theme.border.radius4};
  `,
  large: (theme: DefaultTheme) => css`
    width: 17rem;
    height: 3.2rem;
    border-radius: ${theme.border.radius4};
  `,
  hasBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.blue};
    background: ${theme.colors.white};
    width: 17rem;
    height: 3.2rem;
    border-radius: ${theme.border.radius4};

    > small {
      color: ${theme.colors.blue};
    }
  `,

  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    > small {
      color: ${theme.colors.black};
    }
  `,

  blue: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};

    > svg {
      color: ${theme.colors.white};
    }

    > small {
      color: ${theme.colors.white};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color, size, border, positionIconLeft }) => css`
    border: none;
    padding: ${theme.spacings.xsmal};
    outline: none;
    line-height: ${theme.spacings.large};
    cursor: pointer;
    transition: 0.1s;

    display: flex;
    flex-direction: ${positionIconLeft ? 'row-reverse' : ''};
    align-items: center;
    justify-content: space-between;

    > small {
      font-size: ${theme.font.size.xsmall};
      flex: 1;
      text-transform: uppercase;
      font-weight: ${theme.font.regular};
    }

    &:hover {
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.98);
    }

    > svg {
      height: 1.6rem;
      width: 1.6rem;
      margin-right: ${theme.spacings.small};
      margin-left: ${positionIconLeft ? '0.8rem' : ''};
    }
    ${border && containerModifiers.hasBorder(theme)}
    ${!!size && containerModifiers[size](theme)}
    ${!!color && containerModifiers[color](theme)}
  `}
`;
