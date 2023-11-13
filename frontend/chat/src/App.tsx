import { FC, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { GameCYR } from './assets/pages/gamep';
import { Login } from './assets/pages/login';
import Chat from './assets/seccion-chat/pages/chat';
import './assets/Styles/index.css';
import Home from './assets/pages/home';
import { Error404 } from './assets/Componentes/errorpage';
import AboutUs from './assets/pages/About-us';
import Herramientas from './assets/pages/Herramientas';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('login') !== null;
    setAuthenticated(isAuthenticated);
  }, []);


  const PrivateRoute: FC<{ element: JSX.Element }> = ({ element }): JSX.Element => {
    return authenticated ? element : <Navigate to="/" />;
  };

  //Hola buenos dias 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
        <Route path="/about-us" element={<PrivateRoute element={<AboutUs/>} />} />
        <Route path="/game" element={<PrivateRoute element={<GameCYR />} />} />
        <Route path="/" element={<Login />} />
        <Route path="/about-us1" element={<AboutUs />} />
        <Route path="/Herramientas" element={<Herramientas />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
