import styled from 'styled-components';

import * as HeaderStyles from '../../components/Header/styles';

export const Container = styled.div`
  position: relative;
  height: 100vh;

  ${HeaderStyles.Container} {
    width: 100%;
    margin-bottom: 3.2rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
  }
`;
