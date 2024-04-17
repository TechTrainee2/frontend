import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import Navbar from '../../component/uniSuper/Navbar'
import CardHomeUS from '../../component/uniSuper/CardHomeUS'


function HomeUS() {
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
    <Navbar id={user.id}/>
    <div className='centerd-comp'>
        <span className='font-super bold'>Current Students </span>
        <CardHomeUS/>
    </div>
    </>
      )}
    </>
  );
}

export default HomeUS;