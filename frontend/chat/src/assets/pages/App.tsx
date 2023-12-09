import AuthProvider from "../Componentes/token/auth/authprovider";
import Routees from "../Componentes/token/constRoutes/rouutes";


function App() {
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { ThePrivatePage } from './private';
import '../Styles/index.css';
import { GameCYR } from './gamep';
import { Error404 } from './errorpage';
import { Login } from './login';
import Chat from './chat';
import Home from './home';
import Blog from './blog';
import Chatopen from "../Componentes/chat/chatOpen";

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('login') !== null;
    setAuthenticated(isAuthenticated);
  }, []);

  const redirectToLogin = () => {
    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return null;
  };

  return (
    <>
    <AuthProvider>
      <Routees/>
    </AuthProvider>
    </>
  )
}

export default App;