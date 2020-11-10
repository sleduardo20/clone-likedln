import {ThemeProvider} from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles removeBg />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds:{
    default:'light',
    values:[
      {
        name: 'light',
        value: theme.colors.bg
      },

      {
        name: 'dark',
        value: theme.colors.black
      }

    ]
  }
}