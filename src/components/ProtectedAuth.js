
import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedAuth = ({children}) => {
   const auth = useAuth();
   const location = useLocation();
   if(!auth.user){
    return <Navigate to='/login' state={{path : location.pathname}}/>
   }
  return children;
}

export default ProtectedAuth;