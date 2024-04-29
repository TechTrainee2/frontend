import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import NavbarMain from '../../component/company/NavbarMain'
import { Link } from 'react-router-dom'


function HomeC() {
  let {loading,user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
    {loading ? (
        <div>spinner</div>
      ) : (
        <>
    <NavbarMain id={user.id}/>
    <div className='boxs-container'>
      <Link to={`/CompSuper/${user.id}`}className='gray-bk box navy-font bold not-clicked'>
        <div>Supervisor</div>
      </Link>
      <Link to='/CompStd' className='navy-bk box white-font bold not-clicked '>
        <div >Student</div>
      </Link>
    </div>
    </>
      )}
    </>
  );
}

export default HomeC;