import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import "./login.css"


const Login = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const signin=(e)=>{
        e.preventDefault()


    }

    const register=(e)=>{
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          
            console.log(auth)
        })
        .catch(error=>alert(error.message))
    }

  return (
    <div className='login'>
    <Link to="/">
      <img className='login-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
    </Link>
    <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
            <h5>E-mail</h5>
            <input value={email} onChange={e=>setemail(e.target.value)} type="text" name="" id="" />

            <h5>Password</h5>
            <input value={password} onChange={e=>setpassword(e.target.password)} type="password" />

            <button type='submit' onClick={signin} className='login-sigin-button'>Sign-in</button>

        </form>
        <p>
        By continuing, you agree to Amazon's clone 😉 <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice.</a> 
        </p>

        <button onClick={register} className='login-register-button'>Create your Amazon Account</button>
    </div>
    </div>
  )
}

export default Login
