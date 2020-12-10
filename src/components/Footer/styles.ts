import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 21.5rem;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.xlarge} 0;
    border-top: 0.1rem solid ${theme.colors.gray};

    h3 {
      font-size: ${theme.font.size.normal};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const Content = styled.div`
  width: min(100%, 111rem);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  ${({ theme }) => css`
    width: 48.9rem;
    height: 15.5rem;
    display: flex;
    flex-direction: column;

    ul {
      list-style: none;
      column-count: 3;

      li {
        margin-bottom: ${theme.spacings.medium};

        a {
          font-size: ${theme.font.size.small};
          color: ${theme.colors.black};
          transition: 0.1s;

          &:hover {
            font-weight: ${theme.font.bold};
          }
        }
      }
    }
  `}
`;

export const FastAcecces = styled.div`
  button {
    margin-bottom: ${({ theme }) => theme.spacings.normal};
  }
`;

export const Language = styled.div`
  ${({ theme }) => css`
    select {
      width: 27rem;
      height: 3.2rem;
      border: 1px solid ${theme.colors.gray};
      border-radius: ${theme.border.radius4};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      outline: none;
      color: ${theme.colors.blue};

      option {
        font-weight: ${theme.font.ligth};
        color: ${theme.colors.black};
      }
    }
  `}
`;
