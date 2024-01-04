import React, { FC } from 'react';
import './topnav.css';
import myContext from '../../contexts/mycontext';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Profile from '../profile/profile';
import About from '../about/about';
interface TopnavProps {}

const Topnav: FC<TopnavProps> = () => {
  const userData=React.useContext(myContext);
  return(
    <div className="topnav" data-testid="Topnav">
        
        <nav>
          <ul>
            <li>Home</li>
            <li>
              <Link to={'/useContext/about'}>About</Link></li>
            <li hidden={!userData.isLogin}>
              <Link to={'/useContext/profile'}>Profile</Link>
              </li>
            {userData.isLogin?<li className='user'>Welcome,{userData.name}</li>:null}
          </ul>
        </nav>

        <Routes>
          <Route path='/useContext/profile' element={<Profile/>} ></Route>
          <Route path='/useContext/about' element={<About/>}></Route>
        </Routes>
       
  </div>
  )
}

export default Topnav;
