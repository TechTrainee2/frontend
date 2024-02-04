import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Navbar from './component/Navbar';
import img from './static/bk1.png';
import logo from './static/logo.png';


function App() {
// let [par,setPar]=useState('')
  return (
 <>
<div className='container'>
  <Navbar/>
  
  <div >
    <img src={logo} className='logo'/>
    <img src={img} className='bk1'/>
 </div>


 

    <div className='main-txt'>
      <div className='intxt'>
        <h1>Welcome to TechTrainee</h1>
        <span>a place to help you getting your training done </span>
        <Button text="Get Started"/>

      </div>
    </div>
 
</div>
 </>
  );
}

export default App;
