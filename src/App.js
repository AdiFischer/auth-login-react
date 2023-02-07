import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

export default function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  return (
    <Routes>
      {user
        ? <Route path='*' element={<Profile token={token} setUser={setUser} user={user} />} />
        : <>
          <Route path='/signup' element={<Signup setToken={setToken} setUser={setUser} />} />
          <Route path='*' element={<Login setToken={setToken} setUser={setUser} />} />
        </>
      }

    </Routes>
  );
}


