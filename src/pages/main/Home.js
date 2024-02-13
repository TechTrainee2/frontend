import '../../App.css';
import '../../malak.css';
import Navbar from '../../component/main/Navbar';
import img from '../../static/bk1.png';
import logo from '../../static/logo.png';


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
        <div>
          <h1>Welcome to TechTrainee</h1>
          <span className='text bold'>a place to help you getting your training done </span>
        </div>
        <button className='button-size navy-bk white-font'>
            Get Started
        </button>
      </div>
    </div>

 </>
  );
}

export default Home;
