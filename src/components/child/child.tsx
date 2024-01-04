import React, { FC } from 'react';
import './child.css';

interface ChildProps {}

const Child: FC<ChildProps> = () => (
  <div className="child" data-testid="Child">
    <h3 style={{"textAlign":"center"}}>Child Component</h3>
  </div>
);

export default Child;
