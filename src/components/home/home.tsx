import React, { FC } from 'react';
import './home.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  return(
    <div className="home" data-testid="Home">
    <h1>Welcome to React Hooks Implimentation</h1>
   </div>
  )
}

export default Home;
