import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    white?: string;
  }

  interface SimplePaletteColorOptions {
    white?: string;
  }
}

const palette = {
  primary: {
    main: '#0D1821',
    light: '#F0F4EF',
    white: '#fff',
  },
  secondary: {
    main: '#BFCC94',
    dark: '#8D9F4F',
  },
  text: {
    primary: '#344966',
    secondary: '#B9BAC3',
  },
  info: {
    main: '#344966',
    light: '#D6D8E7',
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: palette.info.main,
          borderRadius: '16px',
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'inherit',
          },
          '&:focus': {
            backgroundColor: 'inherit',
            borderRadius: '16px',
            outline: `8px solid ${palette.info.light}`,
          },
        },
        contained: {
          backgroundColor: palette.info.main,
          borderRadius: '16px',
          '&:hover': {
            backgroundColor: palette.primary.main,
          },
          '&:focus': {
            backgroundColor: palette.info.main,
          },
          '&.Mui-disabled': {
            backgroundColor: palette.text.secondary,
            color: palette.primary.light,
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          borderRadius: '16px',
          border: `1px solid ${palette.primary.main}`,
          '&:hover': {
            border: `3px solid ${palette.primary.main}`,
          },
          '&:focus': {},
          '&.Mui-disabled': {
            color: palette.text.secondary,
            borderColor: palette.text.secondary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: '16px',
          marginTop: '50px',
          background: palette.primary.light,
          '.MuiInputBase-root': {
            minHeight: '128px',
            borderRadius: '16px',
            '&.Mui-focused': {
              backgroundColor: palette.primary.white,
            },
            '&.Mui-disabled': {
              backgroundColor: palette.info.light,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: '16px',
          background: palette.primary.light,
          '&.MuiOutlinedInput-root': {
            marginTop: '50px',
            minHeight: '64px',
            borderRadius: '16px',
            '&.Mui-focused': {
              backgroundColor: palette.primary.white,
            },
            '&.Mui-disabled': {
              backgroundColor: palette.info.light,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
