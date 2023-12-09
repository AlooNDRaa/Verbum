import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = { token: false };
    return (
     auth.token ? <Outlet/> : <Navigate to="/"/>
    );
};

export default PrivateRoute;

