import React, { useState } from 'react';
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [Username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate(); 

  const  submit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/login', {Username, password})
    .then(result => {
      console.log(result)
      if(result.data === "Succes"){
        navigate('/home') 
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='inputBox'>
          <input type='text' onChange={(e) => {setUsername(e.target.value)}} placeholder = "Username" name='' id=' '/>
          <FaUserAlt className='icon' />
        </div>
        <div className='inputBox'>  
          <input type='password' onChange={(e) => {setpassword(e.target.value)}} placeholder='Password'  name='' id=''/>
          <FaLock className='icon' />
        </div>

        <div className='button1'>
          <button type="submit" onClick={submit}>
            Login
          </button>
        </div> 

        {/* <div className='button1'>
          <input type="submit" onClick={submit}/>
        </div> */}

        <div className='button2'>
          {/* Link to the "Signin" page */}
          <Link to="/signin">
            <button>
              Signin
            </button>
          </Link>
        </div>
        

      </form>

      {/* <br>
        <p>OR</p>
      </br> */}

    </div>
  );
}

export default Login;
