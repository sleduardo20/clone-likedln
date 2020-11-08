import styled, { css, DefaultTheme } from 'styled-components';
import { AvatarProps } from '.';

type ContainerProps = Pick<AvatarProps, 'size'>;

const containerModifiers = {
  small: () => css`
    width: 4.2rem;
    height: 4.2rem;
  `,
  medium: () => css`
    width: 5.2rem;
    height: 5.2rem;
  `,
  large: () => css`
    width: 17rem;
    height: 17rem;

    border: 1rem solid #ffff;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    ${!!size && containerModifiers[size]};
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  `}
`;
