import { Navigate } from 'react-router-dom';
import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const username = localStorage.getItem("username");

  if (!username) {
    // Если пользователя нет в localStorage, перенаправляем на страницу входа
    return <Navigate to="/login" />;
  }

  // Если пользователь есть в localStorage, показываем содержимое
  return <>{children}</>;
};

export default ProtectedRoute;