import React from 'react';
import './home.css';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  return (
    <div className='homePage'>
      <h1>home Page {location.state && location.state.id} and Welcome to the home</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="button">LogIn</button>
        </Link>
        <Link to="/signin">
          <button className="button">signin</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
