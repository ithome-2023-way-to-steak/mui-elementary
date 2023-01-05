/// <reference types="react-scripts" />
/// <reference path="@mui/material/Button" />
/* /// <reference path="@mui/material/styles" /> */

import '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    montaBig: true;
  }
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
  interface ButtonPropsVariantOverrides {
    monta: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
}
