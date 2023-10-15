import React from 'react';
import { ToastContainer } from 'react-toastify';
import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import { useState } from 'react';
import s from './Login.module.css';

const Login = () => {
  const [letterClass, setLetterClass]= useState('text-animate');
  // const [input, setInput] = useState({
  //   email:'',
  //   password:''
  // });

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {}
  
  return (
        <div className={`container ${s.signin_page}`}>
          <ToastContainer></ToastContainer>
          <div className={s.signin_title}>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'i', 'g', 'n', ' ', 'I', 'n']}
                idx={15}
              />
            </h1>
            <div className={s.signin_form}>
              <form onSubmit={handleSubmit}>
                <ul>
                  <li data-aos='fade-right'>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                      
                    />
                  </li>
                  <li data-aos="fade-left">
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      required
                    
                    />
                  </li>

                  <li data-aos='fade-up'>
                    <input 
                      type="submit" 
                      className={s.flat_button} 
                      value="SEND" 
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
    )
}


export default Login
