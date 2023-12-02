/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route} from 'react-router-dom';
//import SignUp from '../forms/SignUp';
import Home from '../pages/Home';
//import SignIn from '../forms/SignIn';
//import PassRecovery from '../forms/PassRecovery';
import  Features from '../pages/Features';
import Resources from '../pages/Resources';
import Prices from '../pages/Prices';
import SignUp from '../forms/Signup';
import LogIn from '../forms/Login';
import PassRecovery from '../forms/PassRecovery';

const Rout = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/features' element={<Features />} />
      <Route path='/prices' element={<Prices />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/passRecovery' element={<PassRecovery/>}/>

   
    </Routes>
  );
};

export default Rout;