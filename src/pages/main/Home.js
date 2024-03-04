import '../../App.css';
import '../../malak.css';
import Navbar from '../../component/main/Navbar';
import img from '../../static/bk1.png';
import logo from '../../static/logo.png';
import { Link } from 'react-router-dom';


function Home() {
  return (
 <>
  <Navbar/>
    <div >
      <img src={logo} className='logo'/>
      <img src={img} className='bk1'/>
    </div>

    <div className='main-txt'>
      <div className='intxt'>
          <h1 className='font-super'>Welcome to TechTrainee</h1>
          <span className='home-txt-center bold super'>a place to help you getting your training done </span>
      </div>
    </div>

 </>
  );
}

export default Home;
