import React from 'react'
import { getUser } from "../../features/user";
import { useSelector, useDispatch } from "react-redux";

function layout({children}) {
  return (


    {children}
    
)
}

export default layout