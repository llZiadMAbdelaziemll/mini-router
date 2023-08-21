import React, { useState } from 'react'

import { useLocation, useNavigate  } from 'react-router-dom';
import { useAuth } from './Auth';
const LogIn = () => {
  const auth= useAuth();
  const [userName, setUserName] = useState("")
  const pretectedLocation = useLocation().state?.path || '/';
  const Navigate = useNavigate();
  

  const handleClick =() => {
    auth.login(userName);
      Navigate(pretectedLocation , {replace: true})
  }
  return (
    
    <>
    
      <div style={{display:'block' , paddingBottom:'30px'}}><label> UserName : </label>
      <input onChange={(e) => setUserName(e.target.value)} type='text' name='username' placeholder='username' />
      </div>
 
      <div>
        <button onClick={handleClick} > Log in </button>
      </div>
    </>
  )
}

export default LogIn