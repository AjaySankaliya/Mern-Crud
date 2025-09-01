import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'   // <-- import CSS file

const Api_Key="http://localhost:3001/user"

function App() {
  const [user,setUser]=useState([])
  const [form,setForm]=useState({name:"",email:""})
  const [editId,setEditId]=useState(null)

  useEffect(()=>{
    fetchUser();
  },[]);

  const fetchUser=async()=>{
      try {
        const res=await axios.get(Api_Key)
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }
  }

  const addUser=async()=>{
    try {
      await axios.post(Api_Key,form)
      setForm({name:"",email:""})
      fetchUser()
    } catch (error) {
        console.log(error);
      }
  }

  const updateUser=async()=>{
    try {
      await axios.put(`${Api_Key}/${editId}`,form)
      setForm({name:"",email:""})
      setEditId(null)
      fetchUser()
    } catch (error) {
        console.log(error);
      }
  }

  const deleteUser=async(id)=>{
    try {
      await axios.delete(`${Api_Key}/${id}`)
      fetchUser()
    } catch (error) {
        console.log(error);
      }
  }

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <div className="app">
      <h1 className="title">👤 User CRUD (MERN)</h1>

      {/* Form Section */}
      <div className="form-container">
        <input type="text" name="name" placeholder='Enter Name' value={form.name} onChange={handleChange} />
        <input type="text" name="email" placeholder='Enter Email' value={form.email} onChange={handleChange} />
        {
          editId?
          (
            <button className="btn update" onClick={updateUser}>Update</button>
          ):
          (
            <button className="btn add" onClick={addUser}>Add</button>
          )
        }
      </div>

      {/* User List */}
      <div className="user-list">
        {
          user.map((u)=>(
            <div className="user-card" key={u._id}>
              <h2>{u.name}</h2>
              <p>{u.email}</p>
              <div className="actions">
                <button className="btn edit" onClick={()=>{setForm({name:u.name,email:u.email}); setEditId(u._id)}}>Edit</button>
                <button className="btn delete" onClick={()=>{deleteUser(u._id)}}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
