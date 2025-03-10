

import Home from './pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
const App = () => {
const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged In")
        navigate('/')
      }else{
        console.log("logged out")
        navigate('/login')
      }
    })
  },[])

  return (
    <div>
    
      <Routes>
      <Route exact path='/' element = {<Home/>} />
      <Route  path='/login' element = {<Login/>} />
      <Route path='/player/:id' element={<Player/>} />
      </Routes>
     

    </div>
  )
}

export default App
