import {Components, Theme} from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    huge: true
  }
}

export const components: Components<Omit<Theme, 'components'>> = {
  MuiCssBaseline: {
    styleOverrides: (themeParam)=> ({
      a: {
        textDecoration: 'none',
        color: themeParam.palette.common.black,
      },
      li: {
        listStyle: 'none',
      },
      html: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        overflowY: 'auto !important',
        padding: '0 !important',
        backgroundColor: themeParam.palette.background.default,
      },
    }),
  },
};
