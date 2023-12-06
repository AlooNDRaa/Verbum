import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { ThePrivatePage } from './private';
import '../Styles/index.css';
import { GameCYR } from './game';
import { Error404 } from './errorpage';
import { Login } from './login';
import Chat from './chat';
import Home from './home';
import Blog from './blog';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('login') !== null;
    setAuthenticated(isAuthenticated);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/chat"
          element={authenticated ? <Chat /> : <Navigate to="/" />}
        />
        <Route
          path="/game"
          element={authenticated ? <GameCYR /> : <Navigate to="/" />}
        />
        <Route
          path="/blog"
          element={authenticated ? <Blog /> : <Navigate to="/" />}
        />
        <Route
          path="/priv"
          element={authenticated ? <ThePrivatePage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;