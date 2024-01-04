import React, { FC } from 'react';
import './parent.css';
import {Link, Outlet} from 'react-router-dom';

interface ParentProps {}

const Parent: FC<ParentProps> = () => (
  <div className="parentnav" data-testid="Parent">
     <nav className='parentnav'>
        <ul>
          <li>
            <Link to={'/parent/child'}>Child</Link>
          </li>
        </ul>
      </nav>

      <Outlet/>
     
  </div>
);

export default Parent;
