import { useState } from 'react';
import '../App.css';
import Button from '../component/Button';
import Navbar from '../component/Navbar';
import img from '../static/bk1.png';
import logo from '../static/logo.png';


function Home() {
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
        <div>
        <h1>Welcome to TechTrainee</h1>
        <span className='text bold'>a place to help you getting your training done </span>
        </div>
        <Button text="Get Started" color="navy" txtColor='white'/>

      </div>
    </div>
 
</div>
 </>
  );
}

export default Home;
