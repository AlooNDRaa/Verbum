import { Outlet , Navigate } from 'react-router-dom';

const PrivateRoute = ({auth}: {auth: {isAuthenticated: boolean}}) => {
    return (
        auth.isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute

