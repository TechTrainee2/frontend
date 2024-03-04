import React from 'react'
import Navbar from '../../component/main/Navbar'
import img from '../../static/bk1.png';
import logo from '../../static/logo.png';
import '../../App.css';
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
        <h1 className='font-super'>About Our Website </h1>
        <span className='aboutus-txt-center bold super'>We're a platform designed to make discovering training opportunities simple and enjoyable </span>
        </div>
        

      </div>
    </div>
 
</div>
    </>
  )
}

export default AboutUs