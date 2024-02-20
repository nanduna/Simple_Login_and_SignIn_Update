import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginFolder/Login';
import Signin from './Components/Signin/signin';
import Home from './Components/HomePage/home';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
