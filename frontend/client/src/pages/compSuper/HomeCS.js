import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
import { useEffect } from "react";
import NavbarHome from '../../component/compSuper/NavbarHome'
import CardStudent1 from '../../component/compSuper/CardStudent1'
import CardStd2 from '../../component/compSuper/CardStd2'


function HomeCS() {
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
    <NavbarHome id={user.id}/>
    <div className='centerd-comp'>
      <span className='font-super bold'>Current Students </span>
      <CardStudent1/>
    </div>
    </>
      )}
    </>
  );
}

export default HomeCS;