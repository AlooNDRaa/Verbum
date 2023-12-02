import '../Styles/index.css';
import { FC, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { GameCYR } from './gamep';
import { Login } from './login';
import Chat from './chat';
import Home from './home';
import { Error404 } from './errorpage';
import Blog from './blog';
import { ThePrivatePage } from './private';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('login') !== null;
    setAuthenticated(isAuthenticated);
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="*" element={<Error404 />} />
        {authenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/game" element={<GameCYR />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/priv" element={<ThePrivatePage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;