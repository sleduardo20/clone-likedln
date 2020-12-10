import styled, { css } from 'styled-components';
import { TabProfileProps } from '.';

export const Container = styled.div``;

const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.large};
    padding: ${theme.spacings.xlarge};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius4};

    h2 {
      font-size: ${theme.font.size.medium};
      margin-bottom: ${theme.spacings.xsmal};
    }

    h4 {
      width: fit-content;
      margin-top: ${theme.spacings.normal};
      padding: ${theme.spacings.small} 0;
      font-size: ${theme.font.size.xsmall};
      font-weight: ${theme.font.medium};
      color: ${theme.colors.blue};
      cursor: pointer;
      text-transform: uppercase;
    }
  `}
`;

export const About = styled(Section)``;

export const Description = styled.div<TabProfileProps>`
  ${({ theme, seeMore }) => css`
    height: ${seeMore ? 'auto' : '4.2rem'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > span {
      font-size: ${theme.font.size.small};
    }
  `}
`;

export const Projects = styled(Section)``;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 23rem;
    height: 21.6rem;

    p {
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.medium};
      line-height: ${theme.spacings.large};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    > img {
      width: 100%;
    }
  `}
`;
