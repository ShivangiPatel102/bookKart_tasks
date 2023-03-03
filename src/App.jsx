import {React, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import LoginPage from './pages/LoginPage';

function App() {

  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <p>This is App Page</p>  */}
      {/* <button onClick ={()=>setToggle(!toggle)}>Change Button</button> 
      {toggle ? <Home /> : <About />} */}
      <LoginPage />
    </>
  )
}

export default App
