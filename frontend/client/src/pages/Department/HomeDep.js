import React from 'react'
import NavbarHomeDep from '../../component/department/NavbarHomeDep'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'
import { useCookies } from 'react-cookie';

function HomeDep() {
  const [cookies, setCookie, removeCookie] = useCookies(['access']);
  const dispatch = useDispatch();
  return (
    <>
    <NavbarHomeDep/>
    <button className='button-size-logout navy-bk white-font' onClick={() => dispatch(logout(cookies.access)).then(() => {
         removeCookie('access');
         window.location='/'
        }) }>
       Log Out 
     </button>
    <div className='boxs-container-dep'>
      <Link to='/depSuper' className='gray-bk box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/depStd' className='navy-bk box white-font bold not-clicked '>
        <div >Student</div>
      </Link>

    </div>
    </>
  )
}

export default HomeDep