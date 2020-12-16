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
      text-transform: uppercase;
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

export const DescriptionAbout = styled.div<TabProfileProps>`
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

export const Skills = styled(Section)``;

export const CardsSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardSkills = styled.div`
  ${({ theme }) => css`
    width: 18rem;
    height: 3.2rem;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius8};

    strong {
      width: 100%;
      padding: ${theme.spacings.small};
      font-size: ${theme.font.size.small};
      text-transform: uppercase;
      font-weight: ${theme.font.medium};
      display: flex;
      justify-content: space-between;

      > span {
        color: ${theme.colors.blue};
      }
    }
  `}
`;

export const Experience = styled(Section)``;

const listInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const infoItem = css`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${theme.spacings.small} 0 ${theme.spacings.large} 0;
    margin-bottom: ${theme.spacings.large};
    border-bottom: 0.1rem solid ${theme.colors.gray};

    &:last-child {
      border-bottom: 0;
      margin: 0;
    }
  `}
`;

const descriptionItem = css`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    display: flex;
    flex-direction: column;

    > strong {
      font-size: ${theme.font.size.small};
      line-height: ${theme.spacings.normal};
      margin-bottom: ${theme.spacings.small};
    }

    > span {
      font-size: ${theme.font.size.xsmall};
      font-weight: ${theme.font.medium};
      line-height: ${theme.spacings.normal};
      margin-bottom: ${theme.spacings.normal};

      > strong {
        color: ${theme.colors.blue};
        margin-left: ${theme.spacings.normal};
      }
    }

    p {
      font-size: ${theme.font.size.xsmall};
      line-height: ${theme.spacings.medium};
    }
  `}
`;

export const List = styled.div`
  ${listInfo}
`;

export const Item = styled.div`
  ${infoItem}
`;

export const DescriptionItem = styled.div`
  ${descriptionItem}
`;

export const Education = styled(Section)`
  ${DescriptionItem} {
    span + strong {
      font-size: ${({ theme }) => theme.font.size.xsmall};
      font-weight: ${({ theme }) => theme.font.medium};
    }
  }
`;
