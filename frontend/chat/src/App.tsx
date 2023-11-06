import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GameCYR }  from './assets/pages/gamep'
import { Login } from './assets/pages/login'
import Chat from './assets/seccion-chat/pages/chat'
import './assets/Styles/index.css'
import Home from './assets/pages/home'





function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  Component={Login} />
      <Route path='/game' Component={GameCYR}/>
      <Route path='/chat' Component={Chat}/>
      <Route path='/h' Component={Home}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
