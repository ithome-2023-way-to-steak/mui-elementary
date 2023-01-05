import React, { memo } from 'react';
import DemoBreakpoints from './demoBreakpoints';
import DemoButtonPropsOverrides from './demoButtonPropsOverrides';
import scopedStyles from './MainAppView.module.css';

function MainAppView(): React.ReactElement {
  /* Main */
  return (
    <div className={scopedStyles.mainAppView}>
      <DemoBreakpoints />
      <DemoButtonPropsOverrides />
    </div>
  );
}

export default memo(MainAppView);
