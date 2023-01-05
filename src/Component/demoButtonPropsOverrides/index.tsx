import React, { memo } from 'react';
import Button from '@mui/material/Button';

function ButtonPropsOverrides(): React.ReactElement {
  /* Main */
  return (
    <React.Fragment>
      <Button size="montaBig">monta big</Button>
      <Button color="neutral" variant="monta">
        neutral button
      </Button>
    </React.Fragment>
  );
}

export default memo(ButtonPropsOverrides);
