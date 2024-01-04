import React, { FC } from 'react';
import './customHook.css';
import { useWindowWidth } from '../mycustomHook';
interface CustomHookProps {}

const CustomHook: FC<CustomHookProps> = () => {
  const windowWidth=useWindowWidth();
  return(
    <div className="customHook" data-testid="CustomHook">
        <h1>The width of the window is {windowWidth} px</h1>
  </div>
  )
}

export default CustomHook;
