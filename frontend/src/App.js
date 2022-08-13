import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>} />
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>} />
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>} />
        <Route path='*' element={user ? <Navigate to='/'/> : <Navigate to='/login'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
