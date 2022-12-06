// src/App.js

import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton"
import User from "./components/User"

const App = () => {
  const [users,setUsers] = useState(
    [
      { id: 1, age: 30, name:"송중기"},
      { id: 2, age: 24, name:"송강"},
      { id: 3, age: 32, name:"김유정"},
      { id: 4, age: 29, name:"구교환"},
    ]);
    const [name,setName] = useState("")
    const [age,setAge] = useState("")

    const addUserHandler=()=>{
      const newUser={
        id:users.length+1,
        age:age,
        name:name
      }
      setUsers([...users,newUser])
    }
    const deleteUserHandler=((id)=>{
      const newUserList = users.filter((user)=>user.id!==id);
      setUsers(newUserList)
    })
  return (
    <div>
      <div className="app-style">
      {users.map((user)=>{
        if(user.age<25){
          return <User handleDelete={deleteUserHandler} user={user} key={user.id}></User>
        }else{
          return null
        }
        
      })}
      </div>
      
      <input
        value={name}
        placeholder="이름을 입력해주세요"
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="나이를 입력해주세요"
        onChange={(e)=>setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>추가하기</CustomButton>
    </div>
  )
}

export default App;