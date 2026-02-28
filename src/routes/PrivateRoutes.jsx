import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext/useAuth";


export function PrivateRoute() {
    const { token } = useAuth()
    return token ? <Outlet /> : <Navigate to="/signin" replace />;
}