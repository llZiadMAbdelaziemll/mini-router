import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const NavBar = () => {
    const auth = useAuth();
    const [active, setActive] = useState(false);
    const handleActive = () =>{
      setActive(!active);
    }
  return (
    <>
      <nav className='navbar' style={{display:'flex', padding: '20px'}}>
        
        <NavLink onClick={() => handleActive()}  style={{ padding: '10px 20px'}} to='/'>
            Home
        </NavLink>
        
        <NavLink onClick={() => handleActive()}  style={{ padding: '10px 20px'}} to='work'>
            Work
        </NavLink>
        <NavLink onClick={() => handleActive()}  style={{ padding: '10px 20px'}} to='user'>
            User
        </NavLink>
        <NavLink onClick={() => handleActive()}  style={{ padding: '10px 20px'}} to='profile'>
            Profile
        </NavLink>
        
        {!auth.user && 
        <NavLink onClick={() => handleActive()}  style={{ padding: '10px 20px'}} to='login'>
          Log in
        </NavLink>}
        
      </nav>
       
    </>
  )
}

export default NavBar