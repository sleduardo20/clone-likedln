import styled, { css } from 'styled-components';
import { TabProfileProps } from '.';

export const Container = styled.div``;

const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xlarge};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius4};
  `}
`;

export const About = styled(Section)`
  ${({ theme }) => css`
    > h2 {
      font-size: ${theme.font.size.medium};
      margin-bottom: ${theme.spacings.xsmal};
    }

    h4 {
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
