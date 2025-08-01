import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
const API = 'http://localhost:5000/users'

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetching = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setUsers(data)
  }
  //getAll
  useEffect(() => {
    fetching()
  }, [])
  //postUser
  const postUser = async(user) => {
    await fetch(API, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    fetching()
  }
  //updateUser user=form, id=_id
  const updateUser = async (id, user) => {
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    fetching();
    setEditingUser(null);
  }
//deleteUser
const deleteUser = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
  })
  console.log("Deleting:", id)
  fetching();
}


  return (
    <div className='parent'>
        <h1>user list</h1>
        <UserForm editingUser={editingUser} postUser={postUser} updateUser={updateUser}/>
        <UserList users={users} onEdit={setEditingUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
