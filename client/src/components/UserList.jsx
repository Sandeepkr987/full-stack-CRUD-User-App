import React from 'react'
import '../App.css'

function UserList({users, deleteUser, onEdit}) {
  return (
    <ul className='user-list'>
      {
        users.map((user) => (
          <li key={user._id} className='item'>
        {user.name} - {user.email} - {user.age}
        <button className='button-12' onClick={() => onEdit(user)}>Edit</button>
        <button className='button-12' onClick={() => deleteUser(user._id)}>Delete</button>
      </li>
        ))
      }
    </ul>
  )
}

export default UserList;
