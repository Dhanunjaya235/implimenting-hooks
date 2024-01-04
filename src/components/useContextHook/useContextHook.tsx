import React, { FC, useState } from 'react';
import './useContextHook.css';
import myContext from '../../contexts/mycontext';
import Topnav from '../topnav/topnav';
import Login from '../login/login';
import Profile from '../profile/profile';
interface UseContextHookProps {}

const UseContextHook: FC<UseContextHookProps> = () => {

  const   [loggedIn,setLoggedIn]=useState(false);
  const logIn=()=>{
    setLoggedIn(true)
  };

  const logOut=()=>{
    setLoggedIn(false)
  }
  return(
    <myContext.Provider value={{name:"Dhanunjay",id:205,isLogin:loggedIn,isLoggedIn:logIn,logOut:logOut}}>
        <Login/>
        <Topnav/>
        <Profile/>
    </myContext.Provider>
  )
}

export default UseContextHook;
