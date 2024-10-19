import React from 'react'
import '../components/DisplayUsers.css';

import { useSelector, useDispatch } from 'react-redux'

import { MdDeleteForever } from 'react-icons/md';
import { removeUserReducer } from './store/slices/UserSlice'; 

function DisplayUsers() {


    const users = useSelector((state) =>{
        return state.user;
    })

    // console.log(users);

    const dispatch = useDispatch();

    const removePerticularUser=(index) =>{
        dispatch(removeUserReducer(index))   
    }
    
  return (
    <div className="users-container">
    <h1>Users List</h1>
    <div className="users-grid">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="user-card">
            <h2>{`${user} `}</h2>
            <button className='btn-delete' onClick={()=>{removePerticularUser(index)}}>
                <MdDeleteForever className='delete-icon' />
            </button>
          </div>
        ))
      ) : (
        <p>No users to display</p>
      )}
    </div>
  </div>
  )
}

export default DisplayUsers;



