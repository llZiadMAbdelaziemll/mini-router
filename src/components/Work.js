import {useState} from 'react'

import { NavLink, Outlet } from 'react-router-dom'

const Work = () => {

  const [active, setActive] = useState(false);
  
    const handleActive = () =>{
      setActive(!active);
      
    } 
  return (
    <>
      <h1> Work </h1>
      <nav className='internalNav' style={{marginBottom:"20px"}}>
        
        <NavLink  onClick={() => handleActive()} to="/work/inner" style={{marginRight:"20px"}}>internal 
          
        </NavLink>
        <NavLink  onClick={() => handleActive()} to="/work/outer">external
        
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Work