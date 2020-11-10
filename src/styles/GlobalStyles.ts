import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const globalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
  }

  html{
    font-size: 62.5%;
  }

  html,body, #__next {
    height: 100%;
  }

  body{
    font-family: ${({ theme }) => theme.font.family};
    background: ${({ theme, removeBg }) =>
      removeBg ? 'none' : theme.colors.bg}
  }


@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local('Poppins Light'), local('Poppins-Light'),
       url('../fonts/poppins-v13-latin-300.woff2') format('woff2'), 
       url('../fonts/poppins-v13-latin-300.woff') format('woff'); 
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('../fonts/poppins-v13-latin-regular.woff2') format('woff2'), 
       url('../fonts/poppins-v13-latin-regular.woff') format('woff'); 
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'),
       url('../fonts/poppins-v13-latin-700.woff2') format('woff2'), 
       url('../fonts/poppins-v13-latin-700.woff') format('woff'); 
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
       url('../fonts/poppins-v13-latin-800.woff2') format('woff2'), 
       url('../fonts/poppins-v13-latin-800.woff') format('woff'); 
}
`;

export default globalStyles;
