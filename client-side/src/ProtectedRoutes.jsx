import React from 'react';
import { Navigate, Outlet } from 'react-router';

const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;