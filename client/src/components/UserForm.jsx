import React, {useState, useEffect} from 'react'

function UserForm({editingUser, postUser, updateUser}) {
    const [form, setform] = useState({
        name: '',
        email: '',
        age: ''
    });

useEffect(() => {
  if (editingUser) {
    setform(editingUser); // 👈 Populate form with user being edited
  } else {
    setform({ name: '', email: '', age: '' }); // 👈 Reset form if not editing
  }
}, [editingUser]);

    function handleChange (e) {
        const {name, value} = e.target
        setform({
            ...form,
            [name]: value
        })
    }
    function handleSubmit (e) {
        e.preventDefault()
        if(editingUser) {
            updateUser(editingUser._id, form)
        } else {
            postUser(form)
        }
      setform({ name: '', email: '', age: '' });

     }
  return (
    <form onSubmit={handleSubmit}>
    <input name='name' type='text' placeholder='name' value={form.name} onChange={handleChange}/>
    <input name='email' type='text' placeholder='email' value={form.email} onChange={handleChange}/>
    <input name='age' type='text' placeholder='age' value={form.age} onChange={handleChange}/>
    <button className='button-12' type='submit'>{editingUser ? 'Update' : 'Add'}</button>
    </form>
  )
}

export default UserForm;
