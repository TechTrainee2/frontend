import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'
import img from '../static/bk1.png';
import logo from '../static/logo.png';
import '../App.css';
function AboutUs() {
  return (
    <>
    <div className='container'>
  <Navbar
  
  />
  
  <div >
    <img src={logo} className='logo'/>
    <img src={img} className='bk1'/>
 </div>

    <div className='main-txt'>
      <div className='intxt'>
        <div>
        <h1>About Our Website </h1>
        <span className='text bold'>We're a platform designed to make discovering training opportunities simple and enjoyable </span>
        </div>
        

      </div>
    </div>
 
</div>
    </>
  )
}

export default AboutUs