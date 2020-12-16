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

const ContainerRight = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 36rem;
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge} ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      font-size: ${theme.font.size.small};
      padding-bottom: ${theme.spacings.small};
      border-bottom: 0.1rem solid ${theme.colors.gray};

      a {
        color: ${theme.colors.blue};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`;

export const Dashboard = styled(ContainerRight)`
  ${({ theme }) => css`
    strong {
      font-size: ${theme.font.size.xbig};
      color: ${theme.colors.blue};
      padding-top: ${theme.spacings.small};
    }

    span {
      font-size: ${theme.font.size.small};
      line-height: ${theme.font.size.medium};
      font-weight: ${theme.font.medium};
    }
  `}
`;

export const Visitors = styled(ContainerRight)`
  ${({ theme }) => css`
    div {
      margin-top: ${theme.spacings.normal};
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    > div + div {
      margin: 0 0 ${theme.spacings.small} 0;
    }
  `}
`;

export const VisitorInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: ${theme.spacings.normal};

    strong {
      font-size: ${theme.font.size.normal};
    }

    span {
      font-size: ${theme.font.size.xsmall};
    }
  `}
`;
