import Home from './routes/home/Home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import React from 'react'
import SignIn from './routes/signIn/SignIn'

const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Navigation /> } >
      <Route index element = {<Home />} />
      <Route path='SignIn' element = {<SignIn />} />
      </Route>   
      
    </Routes>
    
  )
}

export default App
