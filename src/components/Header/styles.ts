import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: min(100%, 136rem);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.white};

    > svg {
      margin: 0 ${theme.spacings.xxlarge};
      cursor: pointer;
    }
  `}
`;

export const NavPages = styled.nav`
  ${({ theme }) => css`
    width: 48.2rem;
    height: 100%;
    padding: 0 ${theme.spacings.large};
    border-left: 0.1rem solid ${theme.colors.bg};
    border-right: 0.1rem solid ${theme.colors.bg};
    outline: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const Search = styled.div`
  flex: 1;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 33rem;
    padding: ${theme.spacings.medium};
    border-left: 0.1rem solid ${theme.colors.bg};
    border-right: 0.1rem solid ${theme.colors.bg};
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.size.small};

    flex-direction: column;
    margin-left: ${theme.spacings.normal};

    a {
      color: ${theme.colors.black};
    }

    > strong:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    > span {
      display: flex;
      color: ${theme.colors.black20};
      font-weight: ${theme.font.bold};
      line-height: ${theme.spacings.medium};

      p {
        color: ${theme.colors.green};
        margin-left: ${theme.spacings.xsmal};
        letter-spacing: -0.1rem;
      }
    }
  `}
`;

export const Outher = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxlarge};
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${theme.font.size.small};
    line-height: ${theme.spacings.large};

    &:hover {
      color: ${theme.colors.blue};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;
