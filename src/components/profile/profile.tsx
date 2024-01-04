import React, { FC } from 'react';
import './profile.css';
import myContext from '../../contexts/mycontext';
interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {

  const profileContext=React.useContext(myContext);

  return(
    <div className='profile'>
      {profileContext.isLogin?
      <div className='details'>
              <h1>Profile</h1>
            <p >Name : {profileContext.name}</p><p>ID : {profileContext.id}</p>
          </div>:null}
    </div>
  )
}

export default Profile;
