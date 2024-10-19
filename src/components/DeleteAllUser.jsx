import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUsersReducer } from "./store/slices/UserSlice";

import './DeleteAllUser.css'

export const DeleteAllUser = () => {

//   const users = useSelector((state) =>{
//     return state.user;
// })

  const dispatch = useDispatch();

  const removeAllUsers=()=>{
      dispatch(deleteUsersReducer())
  }

  return <div className="DeleteAlluser" onClick={()=>{removeAllUsers()}}>DeleteAllUser</div>;
};
