import '../Styles/index.css';
import { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GameCYR } from './gamep';
import { Login } from './login';
import Chat from './chat';
import Home from './home';
import { Error404 } from './errorpage';
import Blog from './blog';
import { ThePrivatePage } from './private';


interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  // const [authenticated, setAuthenticated] = useState<boolean>(false);

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('login') !== null;
  //   setAuthenticated(isAuthenticated);
  // }, []);
  // const PrivateRoute: FC<{ element: JSX.Element }> = ({ element }): JSX.Element => {
  //   return authenticated ? element : <Navigate to="/"/>;
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Blog/>} path='/blog'/>
        <Route element={<GameCYR/>} path='/game'/>
        <Route element={<Chat/>} path='/chat'/>
        <Route element={<ThePrivatePage/>} path='/pvp'/>
        <Route element={<Error404/>} path='*'/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;