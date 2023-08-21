import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate();
  const handlelLogout = () =>{
    auth.logout();
    navigate("/")
  }
  return (
    <>
    <div style={{paddingBottom: "10px"}}> welcome <span style={{color:"grey",fontWeight:"bold",fontSize:"25px"}}>{auth.user}</span> </div>
      <div>
        <button onClick={handlelLogout}> Log Out </button>
      </div>
    </>
  )
}

export default Profile