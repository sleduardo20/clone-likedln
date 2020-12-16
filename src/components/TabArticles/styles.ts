import styled, { css } from 'styled-components';

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
