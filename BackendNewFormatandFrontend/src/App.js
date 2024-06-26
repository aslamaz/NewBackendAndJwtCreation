import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRegister from './AdminRegister'
import './admin.css';
import AdminLogin from './AdminLogin';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<AdminRegister/>}/>
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
    </Routes>
    </div>
  )
}

export default App