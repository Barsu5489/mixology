import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [gender, SetGender] = useState('male')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        let  signupObj = {name,email,password,gender}
        console.log(signupObj)

        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(signupObj)
        }).then(res=>{
            alert('success')
            navigate('/login')
        }).catch(err=> alert(err))
    }
  return (
    <div>
    <div>
        <form action="" onSubmit={handleSubmit}> <br /> <br />
            <input type="text" placeholder='name..' value={name} onChange={(e)=> setName(e.target.value)}/> <br /> <br />
            <input type="email" placeholder='email...' value={email} onChange={(e)=> setEmail(e.target.value)}/><br /><br />
            <input type="password" placeholder='password'value={password} onChange={(e)=> setPassword(e.target.value)}/><br /> <br />
            <label htmlFor="">Gender</label> <br />
            <input type="radio" name="selection" value='male' checked={gender === 'male'} onChange={(e)=> SetGender(e.target.value)}/>
            <label htmlFor="">Male</label>
            <input type="radio" value='female' checked={gender === 'female'} onChange={(e)=> SetGender(e.target.value)} name="selection"  />
            <label htmlFor="">Female</label><br />
            <button>signup</button>
        </form>
    </div>
</div>
  )
}

export default Signup