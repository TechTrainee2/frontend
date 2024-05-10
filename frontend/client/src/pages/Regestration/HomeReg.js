import React from 'react'
import NavbarReg from '../../component/Regestration/NavbarReg'
import CardHome from '../../component/Regestration/CardHome'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user'
import { useCookies } from 'react-cookie';


function HomeReg() {
  const [cookies, setCookie, removeCookie] = useCookies(['access']);
  const dispatch = useDispatch();
  return (
    <>
    <NavbarReg/>

    <button className='button-size-logout navy-bk white-font' onClick={() => dispatch(logout(cookies.access)).then(() => {
         removeCookie('access');
         window.location='/'
        }) }>
       Log Out 
     </button>
     
    <CardHome/>
    </>
  )
}

export default HomeReg