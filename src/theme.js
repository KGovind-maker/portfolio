import { createTheme } from '@mui/material/styles';

const common = {
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1 },
    h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '1.1rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '0.75rem 1.5rem',
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-2px)' },
        },
        contained: {
          boxShadow: '0 4px 14px rgba(100, 255, 218, 0.2)',
          '&:hover': { boxShadow: '0 6px 20px rgba(100, 255, 218, 0.4)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { transform: 'translateY(-5px)' },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#64ffda',
          textDecoration: 'none',
          position: 'relative',
          '&:hover': { color: '#9effff' },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '1px',
            bottom: '-2px',
            left: '0',
            backgroundColor: '#64ffda',
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        },
      },
    },
  },
  shape: { borderRadius: 4 },
  spacing: 8,
};

export const getTheme = (mode) => createTheme({
  ...common,
  palette: {
    mode,
    primary: {
      main: '#64ffda',
      light: '#9effff',
      dark: '#00cba9',
      contrastText: mode === 'dark' ? '#0a192f' : '#003b33',
    },
    secondary: {
      main: mode === 'dark' ? '#8892b0' : '#495670',
      light: '#a8b2d1',
      dark: '#495670',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'dark' ? '#0a192f' : '#f6faf9',
      paper: mode === 'dark' ? '#112240' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#e6f1ff' : '#0a1f1c',
      secondary: mode === 'dark' ? '#8892b0' : '#4a5a56',
    },
    divider: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  },
  components: {
    ...common.components,
    MuiCard: {
      styleOverrides: {
        root: {
          ...common.components.MuiCard.styleOverrides.root,
          background:
            mode === 'dark'
              ? 'linear-gradient(145deg, #112240 0%, #0a192f 100%)'
              : 'linear-gradient(145deg, #ffffff 0%, #f6faf9 100%)',
          boxShadow:
            mode === 'dark'
              ? '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
              : '0 10px 30px -15px rgba(0, 0, 0, 0.18)',
        },
      },
    },
  },
});

export default getTheme;
