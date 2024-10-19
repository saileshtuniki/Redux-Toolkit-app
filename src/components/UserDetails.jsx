import React from "react";
import  { DeleteAllUser }  from "./DeleteAllUser";
// import styled from "styled-components";

import { fakeUserData } from "../api";

import './UserDetails.css'
import { useDispatch } from "react-redux";
import { addUserReducer } from "./store/slices/UserSlice";

import DisplayUsers from '../components/DisplayUsers';

const UserDetails = () => {

  const dispatch = useDispatch();  

  const addNewUser = (name)=>{
    console.log(name);
    dispatch(addUserReducer(name));
  };

  return (
    
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>{addNewUser(fakeUserData())}}>Add New Users</button>
        </div>
        <ul>
          <DisplayUsers/>
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    
  );
};


export default UserDetails;
