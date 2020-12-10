import styled, { css } from 'styled-components';

import * as AvatarStyles from '../../components/Avatar/styles';

export const ContentLeft = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius4};
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 36rem;
    position: relative;
    background: ${theme.colors.white};

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

export const ContentProfile = styled.div`
  ${({ theme }) => css`
    width: 55rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    margin: ${theme.spacings.large} ${theme.spacings.large}
      ${theme.spacings.xlarge} 20rem;

    > h2 {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.bold};
      position: relative;

      img {
        margin-left: ${theme.spacings.xsmal};
      }
    }
  `}
`;

export const Location = styled.div`
  ${({ theme }) => css`
    display: flex;

    > p {
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.medium};
      margin-left: ${theme.spacings.xsmal};
    }

    > svg {
      width: 1.6rem;
      height: 1.6rem;
      color: ${theme.colors.blue};
      fill: ${theme.colors.blue};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.bold};
  `}
`;

export const GroupButtons = styled.div`
  width: 35.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tabs = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.large};
  `}
`;

export const ContentRight = styled.div``;
