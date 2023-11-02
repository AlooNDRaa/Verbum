import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Game from './assets/Componentes/game'
import './assets/Styles/index.css'
import { Login } from './assets/pages/login'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  Component={Login} />
      <Route path='/game' Component={Game}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
