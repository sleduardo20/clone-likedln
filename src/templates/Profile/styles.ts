import styled, { css } from 'styled-components';

import * as AvatarStyles from '../../components/Avatar/styles';

export const ContentLeft = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius4};
    background: ${theme.colors.white};
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 36rem;
    position: relative;

    ${AvatarStyles.Container} {
      position: absolute;
      bottom: ${theme.spacings.xxxlarge};
      left: ${theme.spacings.small};
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: cover;
  background-size: cover;
`;

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    width: 95%;
    position: absolute;
    top: ${theme.spacings.normal};
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > button + button {
        margin-left: ${theme.spacings.small};
      }
    }
  `}
`;

export const ContentRight = styled.div``;
