import React, { memo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, theme } from '../Theme';
import MainAppView from './MainAppView';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainAppView />
    </ThemeProvider>
  );
}

export default memo(App);
