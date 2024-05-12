import React from 'react'
import CardSearchPhone from '../../component/student/CardSearchPhone'
import SmallNavbar from '../../component/student/SmallNavbar'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchPhone() {
  let { id } = useParams();
  let { user } = useSelector((state) => state.user);
  
  return (
    <>
    <CardSearchPhone/>
    <SmallNavbar id={user.id}/>
    </>
  )
}

export default SearchPhone