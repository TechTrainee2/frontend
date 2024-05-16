
import Navbar from '../../component/main/Navbar';
import img from '../../static/bk1.png';
import logo from '../../static/logo.png';
import { Link, NavLink } from 'react-router-dom';
import smallbk1 from '../../static/sm-bk1.png';
import { useState } from 'react';


function Home() {
  let [isClicked, setisClicked] = useState(false);

let handelOnClick = () => {
  if (isClicked === false) {
    setisClicked(true);
  } else {
    console.log('hi')
    setisClicked(false);
  }
};
  

  return (
 <>
  <Navbar/>
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={`menu-sandwich ${isClicked&&"active"}`}  onClick={handelOnClick}>
      <path fill='#1c3150' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
    <div className={`${isClicked?'show': 'hidden'} menu`} >
      
      <div className='gray-bk menu-bk'>
        <div className='menu-nav xl-font-super'>
        <NavLink to= '/' className='not-clicked '>Home</NavLink>
        <NavLink to='/SignIn' className='not-clicked' >Sign In</NavLink>
        <NavLink to='/SignUp' className='not-clicked'>Sign Up</NavLink></div>
      

      </div>

    </div>
      
      <img src={logo} className='logo'/>
      <img src={img} className='bk1 '/>
      <img src={smallbk1} className='diplay-none-disktop-sm-bk1 '/>
    </div>

    <div className='main-txt'>
      <div className='intxt '>
          <h1 className='font-super'>Welcome to TechTrainee</h1>
          <span className='home-txt-center bold super'>a place to help you getting your training done </span>
      </div>
    </div>

 </>
  );
}

export default Home;
