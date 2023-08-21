
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Work from './components/Work'
import Profile from './components/Profile'
import LogIn from './components/LogIn'
import Inner from './components/Inner'
import Outer from './components/Outer'
import { Auth } from './components/Auth'
import ProtectedAuth from './components/ProtectedAuth'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Auth>
        <NavBar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />}>
            <Route index element={<Inner />}/>
            <Route path='inner' element={<Inner />} />
            <Route path='outer' element={<Outer />} />
          </Route>
          <Route path='/user' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
          </Route>
          <Route path='/profile' element={<ProtectedAuth><Profile /></ProtectedAuth>} />
          <Route path='/login' element={<LogIn />} />
          <Route path='*' element={<h1>Page Bot Found 404</h1>} />
         </Routes>
         </Auth>
      </BrowserRouter>
    </>
  );
}

export default App;
