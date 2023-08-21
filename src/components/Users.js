
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams,setsearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div style={{paddingBottom:"20px"}} >
        <span  style={{marginRight:"10px"}}>user1 </span>
        <span style={{marginRight:"10px"}}>user2 </span>
        <span  style={{marginRight:"10px"}}>user3 </span>
        <span>user4</span>
      </div>
      <Outlet />
      <button onClick={() => setsearchParams({filter:"active"})} style={{marginRight:"10px"}}>Active users</button>
      <button onClick={() => setsearchParams({})}>All Users</button>
      {isActive ? (<h3>We are active users</h3>) : (<h3>we are all users</h3>)}
    </>
  )
}

export default Users