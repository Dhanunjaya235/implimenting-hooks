import React, { FC } from 'react';
import './login.css';
import myContext from '../../contexts/mycontext';

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const profileContext=React.useContext(myContext);
  return(
    <div className="login" data-testid="Login">
          {!profileContext.isLogin?<button onClick={profileContext.isLoggedIn}>LogIn</button>:<button onClick={profileContext.logOut}>LogOut</button>}          

  </div>
  )
}

export default Login;
