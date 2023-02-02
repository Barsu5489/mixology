import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
const [user, setUser] = useState([])
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [err, setApprove] = useState()
const navigate = useNavigate()
    let userDetails = {email,password}
useEffect(()=>{
    fetch('http://localhost:8000/users')
    .then((res)=>res.json())
    .then((credential)=>{
        console.log(credential)
        setUser(credential)
    })
},[])
function handleSubmit(e){
    e.preventDefault()
    console.log(userDetails)
    console.log(user)
    const approve = user.find(cred=>{
        if(cred.email === email && cred.password === password){
            navigate('/')
            return true
        }else 
       setApprove(<> <p style={{color:'red'}}>Invalid Email or Password</p></>)  
     })
      console.log(approve)
      return approve


     
}
  return (
    <div>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='email...' value={user.email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='password' value={user.password} onChange={(e)=>setPassword(e.target.value)}/>
              <button>Login</button>
              
            </form>
            {err}
        </div>
    </div>
  )
}

export default Login