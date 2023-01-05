import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { alpha } from '@mui/system';

const baseConfig = createTheme({
  spacing: 1,
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 920,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    neutral: {
      light: '#c1c5d1',
      main: '#a3a7b3',
      dark: '#797d88',
      contrastText: '#fff',
    },
  },
});

const theme = createTheme(baseConfig, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        // size customized
        sizeMontaBig: {
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '16px',
          [baseConfig.breakpoints.up('md')]: {
            padding: '16px 24px',
            borderRadius: '16px',
            fontSize: '24px',
          },
        },
        // variant customized
        monta: {
          backgroundColor: baseConfig.palette.neutral.main,
          color: baseConfig.palette.neutral.contrastText,
          '&:hover': {
            backgroundColor: baseConfig.palette.neutral.dark,
            color: baseConfig.palette.neutral.contrastText,
          },
        },
        contained: {
          [baseConfig.breakpoints.up('xs')]: {
            backgroundColor: baseConfig.palette.primary.main,
            color: baseConfig.palette.primary.contrastText,
          },
          [baseConfig.breakpoints.up('sm')]: {
            backgroundColor: baseConfig.palette.error.main,
            color: baseConfig.palette.error.contrastText,
            '&:hover': {
              backgroundColor: baseConfig.palette.error.dark,
              color: baseConfig.palette.error.contrastText,
            },
          },
          [baseConfig.breakpoints.up('md')]: {
            backgroundColor: baseConfig.palette.secondary.main,
            color: baseConfig.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: baseConfig.palette.secondary.dark,
              color: baseConfig.palette.secondary.contrastText,
            },
          },
          [baseConfig.breakpoints.up('lg')]: {
            backgroundColor: baseConfig.palette.success.main,
            color: baseConfig.palette.success.contrastText,
            '&:hover': {
              backgroundColor: baseConfig.palette.success.dark,
              color: baseConfig.palette.success.contrastText,
            },
          },
          [baseConfig.breakpoints.up('xl')]: {
            backgroundColor: baseConfig.palette.warning.main,
            color: baseConfig.palette.warning.contrastText,
            '&:hover': {
              backgroundColor: baseConfig.palette.warning.dark,
              color: baseConfig.palette.warning.contrastText,
            },
          },
        },
        outlined: {
          [baseConfig.breakpoints.up('xs')]: {
            borderColor: baseConfig.palette.primary.main,
            color: baseConfig.palette.primary.main,
          },
          [baseConfig.breakpoints.up('sm')]: {
            borderColor: baseConfig.palette.error.main,
            color: baseConfig.palette.error.main,
            '&:hover': {
              borderColor: baseConfig.palette.error.main,
              backgroundColor: alpha(
                baseConfig.palette.error.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('md')]: {
            borderColor: baseConfig.palette.secondary.main,
            color: baseConfig.palette.secondary.main,
            '&:hover': {
              borderColor: baseConfig.palette.secondary.main,
              backgroundColor: alpha(
                baseConfig.palette.secondary.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('lg')]: {
            borderColor: baseConfig.palette.success.main,
            color: baseConfig.palette.success.main,
            '&:hover': {
              borderColor: baseConfig.palette.success.main,
              backgroundColor: alpha(
                baseConfig.palette.success.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('xl')]: {
            borderColor: baseConfig.palette.warning.main,
            color: baseConfig.palette.warning.main,
            '&:hover': {
              borderColor: baseConfig.palette.warning.main,
              backgroundColor: alpha(
                baseConfig.palette.warning.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
        },
        text: {
          [baseConfig.breakpoints.up('xs')]: {
            color: baseConfig.palette.primary.main,
          },
          [baseConfig.breakpoints.up('sm')]: {
            color: baseConfig.palette.error.main,
            '&:hover': {
              backgroundColor: alpha(
                baseConfig.palette.error.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('md')]: {
            color: baseConfig.palette.secondary.main,
            '&:hover': {
              backgroundColor: alpha(
                baseConfig.palette.secondary.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('lg')]: {
            color: baseConfig.palette.success.main,
            '&:hover': {
              backgroundColor: alpha(
                baseConfig.palette.success.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
          [baseConfig.breakpoints.up('xl')]: {
            color: baseConfig.palette.warning.main,
            '&:hover': {
              backgroundColor: alpha(
                baseConfig.palette.warning.main,
                baseConfig.palette.action.hoverOpacity
              ),
            },
          },
        },
      },
    },
  },
});

export { ThemeProvider, useTheme, useMediaQuery, theme };
