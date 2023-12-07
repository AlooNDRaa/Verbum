import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/authprovider";


export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  };