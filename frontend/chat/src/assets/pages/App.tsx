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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={redirectToLogin() || <Home />} />
        <Route path="/chat" element={redirectToLogin() || <Chat />} />
        <Route path="/game" element={redirectToLogin() || <GameCYR />} />
        <Route path="/blog" element={redirectToLogin() || <Blog />} />
        <Route path="/priv" element={redirectToLogin() || <ThePrivatePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
