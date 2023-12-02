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
  const [authenticated, setAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('login') !== null;
    setAuthenticated(isAuthenticated);
  }, []);


  const PrivateRoute: FC<{ element: JSX.Element }> = ({ element }): JSX.Element => {
    return authenticated ? element : <Navigate to="/"/>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
        <Route path="/game" element={<PrivateRoute element={<GameCYR />} />} />
        <Route path="/blog" element={<PrivateRoute element={<Blog/>}/>} />
        <Route path="/priv" element={<PrivateRoute element={<ThePrivatePage/>}/>} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
