import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';

const palette = {
  primary: {
    main: '#0D1821',
    light: '#F0F4EF',
  },
  secondary: {
    main: '#BFCC94',
    dark: '#8D9F4F',
  },
  text: {
    primary: '#B9BAC3',
  },
  info: {
    main: '#344966',
  },
};

const theme = createTheme({
  palette,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
});

interface ThemePropsType {
  children: React.ReactNode;
}

export const Theme: React.FC<ThemePropsType> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
