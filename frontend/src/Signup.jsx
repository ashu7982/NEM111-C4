

import React, { useReducer, useState } from 'react'
import axios from "axios"
let initalstate={
name:"",email:"",gender:"",password:""
}
const reducer=(state=initalstate,action)=>{

    switch(action.type){
        case "Name" :{
            return {
                ...state,
                name:action.payload
            }
        }
        case "Email" :{
            return {
                ...state,
                email:action.payload
            }
        }
        case "Password" :{
            return {
                ...state,
                password:action.payload
            }
        }
        case "Gender" :{
            return {
                ...state,
                gender:action.payload
            }
        }
        default:{
            return state
        }
    }
}
export const SignupPage = () => {
    let [state,dispatch]=useReducer(reducer,initalstate)
    const {name,email,gender,password}=state
    const handlesubmit=(e)=>{
     e.preventDefault()
    axios.post("https://bright-deer-onesies.cyclic.app/users/register",state)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    }
  return (
    <div>
        <h1>SignupPage</h1>
        <form onSubmit={handlesubmit}>
           name :- <input type="text"  onChange={(e)=>dispatch({type:"Name",payload:e.target.value})} name='name' value={name} placeholder='Name' /> <br />
           Email :- <input type="text"  onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} name='email' value={email} placeholder='email' /> <br />
           Password :- <input type="text"  onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} name='password' value={password} placeholder='Password' /> <br />
           Gender:- <input type="text"  onChange={(e)=>dispatch({type:"Gender",payload:e.target.value})} name='gender' value={gender} placeholder='Gender' /> <br />
           <input type="submit" /> 
        </form>
    </div>
  )
}

import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {
 let [email,setEmail]=useState('')
 let [name,setname]=useState('')
 let [gender,setgender]=useState('')
 let [password,setpass]=useState('')


 function handleSubmit(){
    axios.post('https://bright-deer-onesies.cyclic.app/users/register',{
        body:{
            email,name,gender,password
        }
    })
    .then((res)=>{alert(res)})
    .catch((err)=>alert(err))
 }
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'auto',width:'50%'}}>
       <input type="text"  placeholder='name' onChange={(e)=>setname(e.value)}/>
       <input type="email" placeholder='email'onChange={(e)=>setEmail(e.value)}/>
       <input type="text" placeholder='gender' onChange={(e)=>setgender(e.value)}/>
       <input type="password" placeholder='password' onChange={(e)=>setpass(e.value)}/>
       <button onClick={(e)=>handleSubmit()}>submit</button>
    </div>
  )
}