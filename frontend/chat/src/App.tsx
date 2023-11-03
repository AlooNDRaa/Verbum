import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Game from './assets/Componentes/game'
import './assets/Styles/index.css'
import { Login } from './assets/pages/login'
import Chat from "./assets/seccion chat/pages/chat"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  Component={Login} />
      <Route path='/game' Component={Game}/>
      <Route path='/chat' Component={Chat}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
