import React, { memo } from 'react';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '../../Theme';
import useWindowDimensions from '../../Hook/useWindowDimensions';
import type { Theme } from '../../Theme/types';

function Breakpoints(): React.ReactElement {
  /* States */
  const theme = useTheme();
  const isUpXS = useMediaQuery((t: Theme) => t.breakpoints.up('xs'));
  const isUpSM = useMediaQuery((t: Theme) => t.breakpoints.up('sm'));
  const isUpMD = useMediaQuery((t: Theme) => t.breakpoints.up('md'));
  const isUpLG = useMediaQuery((t: Theme) => t.breakpoints.up('lg'));
  const isUpXL = useMediaQuery((t: Theme) => t.breakpoints.up('xl'));
  const { width: currentWidth } = useWindowDimensions();

  /* Main */
  return (
    <React.Fragment>
      <div>current width: {currentWidth}px</div>
      <div>theme.breakpoints.values.xs: {theme.breakpoints.values.xs}px</div>
      <div>theme.breakpoints.values.sm: {theme.breakpoints.values.sm}px</div>
      <div>theme.breakpoints.values.md: {theme.breakpoints.values.md}px</div>
      <div>theme.breakpoints.values.lg: {theme.breakpoints.values.lg}px</div>
      <div>theme.breakpoints.values.xl: {theme.breakpoints.values.xl}px</div>
      <div>is breakpoint up xs: {isUpXS ? 'true' : 'false'}</div>
      <div>is breakpoint up sm: {isUpSM ? 'true' : 'false'}</div>
      <div>is breakpoint up md: {isUpMD ? 'true' : 'false'}</div>
      <div>is breakpoint up lg: {isUpLG ? 'true' : 'false'}</div>
      <div>is breakpoint up xl: {isUpXL ? 'true' : 'false'}</div>
      <Button>contained button</Button>
      <Button variant="outlined">outlined button</Button>
      <Button variant="text">text button</Button>
    </React.Fragment>
  );
}

export default memo(Breakpoints);
